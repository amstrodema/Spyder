import { Component, OnInit } from '@angular/core';
import { HallRecord } from 'src/app/models/hall-record';
import { SampleData } from 'src/app/modelSampleData/sampleData';
import { GenericModel } from 'src/app/models/genericModel';
import { Router } from '@angular/router';
import { PetitionService } from 'src/app/service/petition.service';
import { Vote, VoteVM } from 'src/app/models/vote';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { Notifier } from 'src/app/models/notifier';
import { ModelClass } from 'src/app/models/modelClass';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-petition',
  templateUrl: './petition.component.html',
  styleUrls: ['./petition.component.scss']
})
export class PetitionComponent implements OnInit {
  toggleSearchFilterIndicator: boolean = false;
  isLoggedIn = ModelClass.isLogged;
  isLoaded = false;
  arrowButton = "icofont-long-arrow-up"
  searchString:string = "";

  hallRecords: HallRecord[] =[];
  hallRecordsHolder: HallRecord[] =[];
  votePercentage:number = 0;
  constructor(private router:Router, private petitionService:PetitionService, titleService: Title) {
    titleService.setTitle("SPYDER: Petitions");
  }

  ngOnInit() {
    this.GetPetition();
  }

  Search(){
    // this.hallRecords = this.hallRecordsHolder.filter(m=> m.hallName.includes(this.searchString) || m.hallName == this.searchString || m.recordOwnerName. == this.searchString || m.recordOwnerName.includes(this.searchString));
    // console.log(this.searchString);

  }

  toggleArrow(){
    if (this.arrowButton == "icofont-long-arrow-up") {
      this.arrowButton = "icofont-long-arrow-down";
    } else {
      this.arrowButton = "icofont-long-arrow-up"
    }

    this.hallRecords = this.hallRecords.reverse();
  }

  toggleSearchFilter(val){
    this.toggleSearchFilterIndicator = val;
    this.hallRecords = this.hallRecordsHolder;
  }
  NewPetition(){
    if (this.isLoggedIn) {
      this.router.navigate(['/search/petition/new']);
    } else {
      Notifier.Notify("Log in and try again.", "danger", 2000);
    }

  }

  GetPetition(){
    this.petitionService.GetPetitionVMs().subscribe((response: any) => {
      this.hallRecords = response;
      this.hallRecordsHolder = response;
      this.isLoaded = true;
    });

  }

  ViewPetition(id){
    this.router.navigate(['/search/petition/details', id]);
  }

  SolveVotePercentage(){

  }


  ControlButtonBgType(isLike:boolean, i:number, petitioner: string){
    if(this.isLoggedIn){
      var obj:HallRecord = this.hallRecords[i];
      var objHolder:HallRecord = this.hallRecords[i];

      obj = GenericModel.VoteButton(obj, isLike);
      let vote:Vote = {isLike:isLike, isReact:obj.isReact, btnBgTypeDisLike:obj.btnBgTypeDisLike, btnBgTypeLike:obj.btnBgTypeLike, itemID:obj.id, userCountryID: ModelClass.user.countryID, userID: ModelClass.user.id, createdBy: ModelClass.user.id};


      this.petitionService.VotePetition(vote, petitioner).subscribe((response: ResponseMessage) => {
        if (response.statusCode != 200) {
          Notifier.Notify(response.message, "danger", 2000);
          obj = objHolder;
        }
        else {
           Notifier.Notify(response.message, "success", 2000);
        }

        let voteVM:VoteVM = response.data;
        obj.totalDownVotes = voteVM.totalDownVote;
        obj.totalUpVotes = voteVM.totalUpVote;
        obj.votePercentage = voteVM.votePercentage;

        if (obj.votePercentage >= 100) {
          this.hallRecords.splice(i,1);
          this.hallRecordsHolder.splice(i,1);
          Notifier.Notify("Petition Confirmed!", "success", 2000);
        }
      });
    }
    else{
      Notifier.Notify("Log in and try again.", "danger", 2000);
    }

  }

  SolveReaction(isLike, val){
    if(isLike){
      if(val == ""){ return "btn-outline-success"}
    }
    else{
      if(val == ""){ return "btn-outline-danger"}
    }
  }

}
