import { Component, OnInit } from '@angular/core';
import { GenericModel } from 'src/app/models/genericModel';
import { Location } from '@angular/common';
import { HallService } from 'src/app/service/hall.service';
import { ModelClass } from 'src/app/models/modelClass';
import { HallRecord } from 'src/app/models/hall-record';
import { ActivatedRoute, Router } from '@angular/router';
import { Feed } from 'src/app/models/feed';

@Component({
  selector: 'app-hall-details',
  templateUrl: './hall-details.component.html',
  styleUrls: ['./hall-details.component.scss']
})
export class HallDetailsComponent implements OnInit {
  genericModel:GenericModel = new GenericModel();
  route:string;
  feed:Feed = new Feed();
  hallRecordID = "";
  hallRecord:HallRecord = new HallRecord();
  isLoaded = false;
  constructor(private location:Location, private hallService:HallService, private activeRoute:ActivatedRoute, private router:Router) {
  }

  ngOnInit() {
    this.route = this.router.url;
    this.activeRoute.params.subscribe(params => {
      this.hallRecordID = params['id'];
      if (this.hallRecordID != undefined) {
        this.GetHallDetails();
      }
      else{
        try {
          this.router.navigate(['/search/'+ModelClass.prevRoute]);
        } catch (error) {
          this.router.navigate(['/search/']);
        }
      }

    });
  }

  GetHallDetails(){
    this.hallService.GetHallMemberDetailsVM(this.hallRecordID).subscribe((response: any) => {
      var hallRecord = this.hallRecord = response;
      this.feed ={id:hallRecord.id, title:hallRecord.recordOwnerName, author: hallRecord.petitioner,time:hallRecord.time, day:hallRecord.day, image:hallRecord.recordOwnerImage
      ,brief:hallRecord.brief, article:hallRecord.recordOwnerStory, isLike:hallRecord.isLike, isReact:hallRecord.isReact, btnBgTypeDisLike:hallRecord.btnBgTypeDisLike,
    btnBgTypeLike:hallRecord.btnBgTypeLike, totalDownVotes:hallRecord.totalDownVotes, totalUpVotes:hallRecord.totalUpVotes,
    votePercentage:hallRecord.votePercentage, authorID : hallRecord.petitionerID, totalVotesRequired: hallRecord.totalVotesRequired}
    this.isLoaded = true;
    });
  }

}
