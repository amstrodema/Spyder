import { ModelClass } from 'src/app/models/modelClass';
import { Component, OnInit, Input } from '@angular/core';
import { HallRecord } from 'src/app/models/hall-record';
import { Notifier } from 'src/app/models/notifier';
import { ClipboardService } from 'ngx-clipboard';
import { GenericModel } from 'src/app/models/genericModel';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FlagReportService } from 'src/app/service/flagReport.service';
import { FlagReport } from 'src/app/models/flagReport';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { PetitionService } from 'src/app/service/petition.service';
import { Vote, VoteVM } from 'src/app/models/vote';
import { Feed } from 'src/app/models/feed';
import { LikeService } from 'src/app/service/like.service';

@Component({
  selector: 'app-details-feed',
  templateUrl: './details-feed.component.html',
  styleUrls: ['./details-feed.component.scss']
})
export class DetailsFeedComponent implements OnInit {
  @Input() feed:Feed;
  @Input() tag:string = "";
  @Input() tagLink:string = "";
  @Input() feedFlag:number = 0; //0= All 1=Hall 2= Petition
  constructor(private clipBoard:ClipboardService, private router:Router,private likeService:LikeService, private flagReportService: FlagReportService, private petitionService: PetitionService) { }
  genericModel: GenericModel = new GenericModel();
  ngOnInit() {
    //this.route = this.genericModel.GetRoute(this.location);
  }

  Flag(){
    if(ModelClass.isLogged){
      var report: FlagReport = {petitionerID:ModelClass.user.id, caseLink:this.router.url, isActive: true, itemID: this.feed.id}
      this.flagReportService.FlagThisReport(report).subscribe((response: ResponseMessage) => {
        if (response.statusCode == 200) {
          Notifier.Notify(response.message, "success", 2000);
        } else {
          Notifier.Notify(response.message, "danger", 2000);
        }
      });
    }
    else{
      Notifier.Notify("Log in and try again.", "danger", 2000);
    }
  }


  openProfile(username,id){
    if (username != "Anonymous") {
      this.router.navigate(['/search/profile/',id]);
    } else {
      Notifier.Notify("Anonymous author has no profile", "danger", 2000);
    }
  }

  Copy(){
    var content = ModelClass.baseUrl2+this.router.url;
    this.clipBoard.copyFromContent(content);
    Notifier.Notify("Link copied", "success", 2000);
  }

  ControlButtonBgType(isLike:boolean){

    if(ModelClass.isLogged){
      var obj:Feed = this.feed;
    var objHolder:Feed = this.feed;

    obj = GenericModel.VoteButton(obj, isLike);
    let vote:Vote = {isLike:isLike, isReact:obj.isReact, btnBgTypeDisLike:obj.btnBgTypeDisLike, btnBgTypeLike:obj.btnBgTypeLike, itemID:obj.id, userCountryID: ModelClass.user.countryID, userID: ModelClass.user.id, createdBy: ModelClass.user.id};

    if (this.feedFlag > 0)
      this.petitionService
        .VotePetition(vote, this.feed.authorID)
        .subscribe((response: ResponseMessage) => {
          if (response.statusCode != 200) {
            Notifier.Notify(response.message, "danger", 2000);
            obj = objHolder;
          } else {
            Notifier.Notify(response.message, "success", 2000);

          let voteVM: VoteVM = response.data;
          obj.totalDownVotes = voteVM.totalDownVote;
          obj.totalUpVotes = voteVM.totalUpVote;
          obj.votePercentage = voteVM.votePercentage;
          }

        });
    else
      this.likeService
        .Like(vote, this.feed.authorID)
        .subscribe((response: ResponseMessage) => {
          if (response.statusCode != 200) {
            Notifier.Notify(response.message, "danger", 2000);
            obj = objHolder;
          } else {
            Notifier.Notify(response.message, "success", 2000);

            let voteVM: VoteVM = response.data;
            obj.totalDownVotes = voteVM.totalDownVote;
            obj.totalUpVotes = voteVM.totalUpVote;
            obj.votePercentage = voteVM.votePercentage;
          }


        });
    }
    else{
      Notifier.Notify("Log in and try again.", "danger", 2000);
    }
  }


  SolveReaction(isReact, isLike){
    if(isReact){
     if(isLike){
       return "btn-success"
     }
    }
   }
   SolveReaction2(isReact, isLike){
     if(isReact){
      if(!isLike){
        return "btn-danger"
      }
     }
    }

    Back(){
      this.router.navigate([this.tagLink]);
    }

}
