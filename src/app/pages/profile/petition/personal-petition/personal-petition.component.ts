import { Component, OnInit, Input } from '@angular/core';
import { HallRecord } from 'src/app/models/hall-record';
import { Router } from '@angular/router';
import { Notifier } from 'src/app/models/notifier';
import { VoteVM, Vote } from 'src/app/models/vote';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { GenericModel } from 'src/app/models/genericModel';
import { ModelClass } from 'src/app/models/modelClass';
import { ProfileService } from 'src/app/service/profile.service';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-personal-petition',
  templateUrl: './personal-petition.component.html',
  styleUrls: ['./personal-petition.component.scss']
})
export class PersonalPetitionComponent implements OnInit {
 @Input() hallRecords: HallRecord[] =[] ;
 @Input() userID ;
 isLoggedIn = ModelClass.isLogged;
 profileRecords:Profile[] = [];

  constructor(private router:Router, private profileService:ProfileService) { }

  ngOnInit() {
    this.GetData();
  }
  GetData(){
     this.profileService.GetProfileContent(this.userID).subscribe((response: ResponseMessage) => {
        if (response.statusCode == 200) {
         this.profileRecords = response.data;
        }
        else {
           Notifier.Notify(response.message, "danger", 2000);
        }
      });
  }
  OpenClick(valueType: string, id: string){
    switch (valueType) {
      case "Confession":
      this.router.navigate(['/search/confession/details', id]);
        break;
      case "Scammer":
      this.router.navigate(['/search/scammer/details', id]);
        break;
      case "Whistle Blower":
      this.router.navigate(['/search/whistle-blower/details', id]);
        break;
      case "Missing":
      this.router.navigate(['/search/missing/details', id]);
        break;
      case "Stolen":
      this.router.navigate(['/search/stolen/details', id]);
        break;
      case "Found":
      this.router.navigate(['/search/found/details', id]);
        break;
      case "Death":
      this.router.navigate(['/search/death-register/details', id]);
        break;
      case "Marriage":
      this.router.navigate(['/search/marriage-register/details', id]);
        break;
      case "Petition":
      this.router.navigate(['/search/petition/details', id]);
        break;
      case "Hall":
      this.router.navigate(['/search/hall/details', id]);
        break;

      default:
        break;
    }
  }
}
