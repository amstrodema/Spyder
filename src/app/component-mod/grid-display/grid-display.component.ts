import { Component, OnInit, Input } from '@angular/core';
import { GenericModel } from 'src/app/models/genericModel';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HallRecord } from 'src/app/models/hall-record';
import { Vote, VoteVM } from 'src/app/models/vote';
import { ModelClass } from 'src/app/models/modelClass';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { Notifier } from 'src/app/models/notifier';
import { PetitionService } from 'src/app/service/petition.service';

@Component({
  selector: 'app-grid-display',
  templateUrl: './grid-display.component.html',
  styleUrls: ['./grid-display.component.scss']
})
export class GridDisplayComponent implements OnInit {
  genericModel: GenericModel = new GenericModel();
  hallName = "";
  location:Location;
  @Input() hallRecords: HallRecord[] =[];
  @Input () this;
  @Input () filterGroup;

  constructor(location:Location, private router: Router, private petitionService:PetitionService) {
    this.location = location;
   }

  ngOnInit() {
    this.hallName = this.genericModel.GetTitle(this.location);
  }

  ControlButtonBgType(isLike:boolean, i:number){
    if (ModelClass.isLogged) {
      var obj = this.hallRecords[i];
    var objHolder = this.hallRecords[i];

    obj = GenericModel.LikeButton(obj, isLike);

    this.this.SelectFilterGroup(this.filterGroup);

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
    } else {
      Notifier.Notify("Log in and try again.", "danger", 2000);
    }

  }

  HallDetails(id){
    // const modalRef = this.modalService.open(HerosComponent, { scrollable: true, });
    //   modalRef.result.then((result) =>{
    //   }).catch (onunhandledrejection=> {
    //   });
    this.router.navigate(['/search/hall/details', id]);
  }


}
