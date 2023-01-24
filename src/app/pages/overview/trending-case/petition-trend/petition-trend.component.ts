import { Component, OnInit, Input } from '@angular/core';
import { Petition } from 'src/app/models/petition';
import { HallRecord } from 'src/app/models/hall-record';
import { Router } from '@angular/router';
import { GenericModel } from 'src/app/models/genericModel';
import { Vote, VoteVM } from 'src/app/models/vote';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { Notifier } from 'src/app/models/notifier';
import { PetitionService } from 'src/app/service/petition.service';
import { ModelClass } from 'src/app/models/modelClass';
import { Trend } from 'src/app/models/trend';

@Component({
  selector: 'app-petition-trend',
  templateUrl: './petition-trend.component.html',
  styleUrls: ['./petition-trend.component.scss']
})
export class PetitionTrendComponent implements OnInit {

  constructor(private router: Router, private petitionService: PetitionService) { }
  @Input() data:Trend;
  @Input() petitions:HallRecord[] =[];
  ngOnInit() {

  }

  ViewPetition(id){
    this.router.navigate(['/search/petition/details', id]);
  }

  ViewHall(loc){
    this.router.navigate(['/search/'+loc]);
  }

  SolveReaction(isLike, val){
    if(isLike){
      if(val == ""){ return "btn-outline-success"}
    }
    else{
      if(val == ""){ return "btn-outline-danger"}
    }
  }


  ControlButtonBgType(isLike:boolean, i:number){
    if(ModelClass.isLogged){
      var obj:HallRecord = this.petitions[i];
      var objHolder:HallRecord = this.petitions[i];

      obj = GenericModel.VoteButton(obj, isLike);
      let vote:Vote = {isLike:isLike, isReact:obj.isReact, btnBgTypeDisLike:obj.btnBgTypeDisLike, btnBgTypeLike:obj.btnBgTypeLike, itemID:obj.id, userCountryID: ModelClass.user.countryID, userID: ModelClass.user.id, createdBy: ModelClass.user.id};


      this.petitionService.VotePetition(vote).subscribe((response: ResponseMessage) => {
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
      });
    }
    else{
      Notifier.Notify("Log in and try again.", "danger", 2000);
    }

  }
}
