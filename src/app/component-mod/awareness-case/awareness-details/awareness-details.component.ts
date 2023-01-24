import { Component, OnInit, Input } from '@angular/core';
import { Feed } from 'src/app/models/feed';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { MissingService } from 'src/app/service/missing.service';
import { MissingVM } from 'src/app/models/missingVM';
import { Missing, Feature, FeatureVM } from 'src/app/models/missing';
import { Router } from '@angular/router';
import { Notifier } from 'src/app/models/notifier';

@Component({
  selector: 'app-awareness-details',
  templateUrl: './awareness-details.component.html',
  styleUrls: ['./awareness-details.component.scss']
})
export class AwarenessDetailsComponent implements OnInit {
  @Input() route:string = "";
  @Input() recordID:string = "";
  @Input() awarenessTypeNo:number;
  @Input() tag:string = "";
  @Input() tagLink:string = "";
  missing:Missing = new Missing();
  features:FeatureVM[] = [];

  isLoaded = false;

  constructor(private missingService: MissingService, private router: Router) { }

  ngOnInit() {
    this.GetData();
  }

  openProfile(username,id){
    if (username != "Anonymous") {
      this.router.navigate(['/search/profile/',id]);
    } else {
      Notifier.Notify("Anonymous author has no profile", "danger", 2000);
    }
  }

  GetData(){
    this.missingService.GetMissingDetails(this.recordID).subscribe((response: ResponseMessage) => {
      if(response.statusCode == 200){
        var record:MissingVM = response.data;

        this.missing = record.missingDetails;
        this.features = record.featureVMs
        this.isLoaded = true;
      }
      else{

      }
    });
  }

  SendMessage(){

  }

  Alert(){

  }

  Back(){
    this.router.navigate([this.tagLink]);
  }

}
