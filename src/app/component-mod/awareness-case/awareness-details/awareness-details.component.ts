import { Component, OnInit, Input } from '@angular/core';
import { Feed } from 'src/app/models/feed';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { MissingService } from 'src/app/service/missing.service';
import { MissingVM } from 'src/app/models/missingVM';
import { Missing, Feature, FeatureVM } from 'src/app/models/missing';
import { Router } from '@angular/router';
import { Notifier } from 'src/app/models/notifier';
import { ModelClass } from 'src/app/models/modelClass';

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
  featrs = "";
  isHideBanner = true;
  bannerImage = "";
  thisParent = this;
  update: string;
  isUpdate: boolean = false;
  isOwner = false;
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

  AllowUpdate(){
    this.isUpdate = !this.isUpdate
  }

  CheckIfOwner(){
    if (ModelClass.CheckLoggedIn) {
      if(ModelClass.user.id == this.missing.creatorID){
        this.isOwner = true;
        return;
      }
    }
    this.isOwner = false;
  }

  UpdateBrief(){
    if (this.update == "" || this.update == undefined) {
      Notifier.Notify("Update is empty!", "danger", 2000);
    } else {
      this.missingService.UpdateRecord(this.missing.id, this.update).subscribe((response: ResponseMessage) => {
        if(response.statusCode == 200){
          Notifier.Notify(response.message, "success", 2000);
          var missing:Missing = response.data;

          this.missing.update = missing.update;
          this.missing.updateDay = missing.updateDay;
          this.missing.updateTime = missing.updateTime;
        }
        else{
          Notifier.Notify(response.message, "danger", 2000);
        }
      });
    }
  }

  GetBanner(val){
    this.isHideBanner = false;
    this.bannerImage = val;
  }

  // CompileFeatures(){
  //   let count = 0;

  //   this.features.forEach(element => {
  //     count++;
  //     if (count < 3) {
  //       this.featrs += element.featureType +" => "+ element.value+"\n"
  //     }
  //   });
  // }

  GetData(){
    this.missingService.GetMissingDetails(this.recordID).subscribe((response: ResponseMessage) => {
      if(response.statusCode == 200){
        var record:MissingVM = response.data;

        this.missing = record.missingDetails;
        this.features = record.featureVMs
        this.isLoaded = true;
        this.CheckIfOwner();
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
