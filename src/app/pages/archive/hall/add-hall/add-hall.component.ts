import { Component, OnInit } from '@angular/core';
import { GenericModel } from 'src/app/models/genericModel';
import { ActivatedRoute, Router } from '@angular/router';
import { HallRecord } from 'src/app/models/hall-record';
import { SampleData } from 'src/app/modelSampleData/sampleData';
import { HallService } from 'src/app/service/hall.service';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { Hall } from 'src/app/models/hall';
import { Notifier } from 'src/app/models/notifier';
import { PetitionService } from 'src/app/service/petition.service';
import { ModelClass } from 'src/app/models/modelClass';

@Component({
  selector: 'app-add-hall',
  templateUrl: './add-hall.component.html',
  styleUrls: ['./add-hall.component.scss']
})
export class AddHallComponent implements OnInit {
  isEdit: boolean = false;
  petitionID:string;
  imageBase64: string = "";
  petitionModel: HallRecord = new HallRecord();
  selectedHall: string = "Select Hall Type";
  halls: Hall[] = [];
  isLoggedIn = ModelClass.isLogged;
  meta: string = "";

  constructor(private activeRoute: ActivatedRoute, private router: Router, private hallService: HallService, private petitionService:PetitionService) { }

  ngOnInit() {
    if (!this.isLoggedIn) {
      Notifier.Notify("Log in and try again.", "danger", 2000);
      this.router.navigate(['/search/petitions']);
    }
    this.activeRoute.params.subscribe(params => {
      this.petitionID = params['id'];
      if (this.petitionID != undefined) {
        this.isEdit = true;
      }
      this.GetHalls();
    });
  }

  GetHalls(){
    this.hallService.GetHalls().subscribe((response: any) => {
      this.halls = response;
    });
  }


  PickHall(val, id, requiredVotes, cost){
    this.selectedHall = val;
    this.petitionModel.hallID = id;
    this.meta = "Record would require "+requiredVotes+" votes"
  }


  OptionFileChangeEvent(fileInput: any) {

      GenericModel.FileChangeEvent(fileInput);

      setTimeout(() => {
        this.imageBase64 = GenericModel.cardImageBase;
        }, 1000);
  }

  SetAnonymous(val){
    this.petitionModel.isAnonymous = val;
  }

  Post(){
    if (ModelClass.isLogged) {
      this.petitionModel.recordOwnerImage = this.imageBase64;
      this.petitionModel.petitionerID = ModelClass.user.id;


      this.petitionModel.petitionCountryID = ModelClass.user.countryID;
     // this.confessionModel.isAnonymous = this.isAnonymous;
    if (this.petitionModel.hallID == "" || this.petitionModel.hallID == undefined) {
      Notifier.Notify("Select record type", "danger", 2000);
    }
     else if (this.petitionModel.recordOwnerName == undefined) {
       Notifier.Notify("Input name of record holder", "danger", 2000);
     }
    else if (this.petitionModel.brief == undefined) {
      Notifier.Notify("Input record abstract", "danger", 2000);
    }
     else if (this.petitionModel.recordOwnerStory == undefined) {
      Notifier.Notify("Input record details", "danger", 2000);
    }
    else if (this.petitionModel.recordOwnerImage == "") {
      Notifier.Notify("Select image of record holder", "danger", 2000);
    }
    else {
       this.petitionService
         .NewPetition(this.petitionModel)
         .subscribe((response: ResponseMessage) => {
           if (response.statusCode == 200) {
             Notifier.Notify(response.message, "success", 2000);
             this.petitionModel = response.data;
             this.router.navigate(
               ["/search/petition/details", this.petitionModel.id],
               { replaceUrl: true }
             );
           } else {
             Notifier.Notify(response.message, "danger", 2000);
           }
         });
     }
    } else {
      Notifier.Notify("Log in and try again.", "danger", 2000);
    }


  }

}
