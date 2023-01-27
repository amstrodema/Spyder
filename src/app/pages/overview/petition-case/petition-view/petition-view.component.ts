import { Feed } from 'src/app/models/feed';
import { Component, OnInit } from '@angular/core';
import { ModelClass } from 'src/app/models/modelClass';
import { ActivatedRoute, Router } from '@angular/router';
import { HallService } from 'src/app/service/hall.service';
import { HallRecord } from 'src/app/models/hall-record';
import { GenericModel } from 'src/app/models/genericModel';
import { Location } from '@angular/common';
import { PetitionService } from 'src/app/service/petition.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: "app-petition-view",
  templateUrl: "./petition-view.component.html",
  styleUrls: ["./petition-view.component.scss"]
})
export class PetitionViewComponent implements OnInit {
  genericModel: GenericModel = new GenericModel();
  route: string;
  isLoaded = false;
  // hallRecord:HallRecord = new HallRecord;
  feed: Feed;
  hallRecordID = "";
  constructor(
    private location: Location,
    private petitionService: PetitionService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.route = this.router.url;
    this.activeRoute.params.subscribe(params => {
      this.hallRecordID = params["id"];
      if (this.hallRecordID != undefined) {
        this.GetPetitionDetails();
      } else {
        try {
          this.router.navigate(["/search/" + ModelClass.prevRoute]);
        } catch (error) {
          this.router.navigate([""]);
        }
      }
    });
  }

  GetPetitionDetails() {
    this.petitionService
      .GetPetitionDetailsVM(this.hallRecordID)
      .subscribe((response: any) => {
        let hallRecord: HallRecord = response;
        this.feed = {
          time: hallRecord.time,
          day: hallRecord.day,
          title:
            "Petition to Enlist " +
            hallRecord.recordOwnerName +
            " into the " +
            hallRecord.hallName,
          image: hallRecord.recordOwnerImage,
          article: hallRecord.recordOwnerStory,
          brief: hallRecord.brief,
          author: hallRecord.petitioner,
          id: hallRecord.id,
          isReact: hallRecord.isReact,
          isLike: hallRecord.isLike,
          btnBgTypeDisLike: hallRecord.btnBgTypeDisLike,
          btnBgTypeLike: hallRecord.btnBgTypeLike,
          totalDownVotes: hallRecord.totalDownVotes,
          totalUpVotes: hallRecord.totalUpVotes,
          votePercentage: hallRecord.votePercentage,
          authorID : hallRecord.petitionerID,
          totalVotesRequired: hallRecord.totalVotesRequired
        };
        this.titleService.setTitle(
          "SPYDER - Sign this petition to enlist " +
            hallRecord.recordOwnerName +
            " into the " +
            hallRecord.hallName
        );
        this.isLoaded = true;
      });
  }
}
