import { Component, OnInit, Input } from '@angular/core';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { Confession } from 'src/app/models/confession';
import { ModelClass } from 'src/app/models/modelClass';
import { ConfessionServiceService } from 'src/app/service/confessionService.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Feed } from 'src/app/models/feed';

@Component({
  selector: 'app-dialogue-details',
  templateUrl: './dialogue-details.component.html',
  styleUrls: ['./dialogue-details.component.scss']
})
export class DialogueDetailsComponent implements OnInit {
  @Input() route:string = "";
  @Input() recordID:string = "";
  @Input() tag:string = "";
  @Input() tagLink:string = "";
  feed:Feed = new Feed();
  authorID: string;

  isLoaded = false;

  constructor(private activeRoute:ActivatedRoute, private confessionServiceService:ConfessionServiceService, private router:Router) { }

  ngOnInit() {
    this.GetData(this.recordID);
  }
  GetData(itemID){
    this.confessionServiceService.GetConfessionDetails(itemID).subscribe((response: ResponseMessage) => {
      if(response.statusCode == 200){
        var record:Confession = response.data;
        this.authorID = record.createdByID;

      this.feed ={id:record.id, title:record.title, author: record.createdBy,time:record.time, day:record.date, image:record.image
      ,brief:"", article:record.details, isLike:record.isLike, isReact:record.isReact, btnBgTypeDisLike:"",
    btnBgTypeLike:"", totalDownVotes:record.totalDisLikes, totalUpVotes:record.totalLikes,votePercentage:0, authorID: record.createdByID }
     this.isLoaded = true;
  }
      else{

      }
    });
  }
}

