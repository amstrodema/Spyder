import { Death } from './../../../../../models/death';
import { Component, OnInit } from '@angular/core';
import { GenericModel } from 'src/app/models/genericModel';
import { Router, ActivatedRoute } from '@angular/router';
import { DeathService } from 'src/app/service/death.service';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { Notifier } from 'src/app/models/notifier';
import { ModelClass } from 'src/app/models/modelClass';

@Component({
  selector: 'app-new-death-register',
  templateUrl: './new-death-register.component.html',
  styleUrls: ['./new-death-register.component.scss']
})
export class NewDeathRegisterComponent implements OnInit {
  deathModel:Death = new Death();
  isEdit:boolean;
  deathRecordID: string;

  constructor(private router:Router, private activeRoute: ActivatedRoute, private deathService: DeathService) { }

  ngOnInit() {
    if (!ModelClass.isLogged) {
      this.router.navigate(['/search/death-register']);
      Notifier.Notify("Log in and try again.", "danger", 2000);
    }

    this.activeRoute.params.subscribe(params => {
      this.deathRecordID = params['id'];
      if (this.deathRecordID != undefined) {
        this.isEdit = true;
      }

    });
  }



  OptionFileChangeEvent(fileInput: any) {

    GenericModel.FileChangeEvent(fileInput);

    setTimeout(() => {
      this.deathModel.image = GenericModel.cardImageBase;
      }, 1000);
}

Post(){
  if (ModelClass.isLogged){
  this.deathModel.countryID = ModelClass.user.countryID;
  this.deathModel.createdBy = ModelClass.user.id;

  if(this.deathModel.name == undefined){
    Notifier.Notify("Name field is empty", "danger", 2000);
  }
  else  if(this.deathModel.birthDate == undefined){
    Notifier.Notify("Birth date field is empty", "danger", 2000);
  }
  else  if(this.deathModel.deathDate == undefined){
    Notifier.Notify("Death date field is empty", "danger", 2000);
  }
  else  if(this.deathModel.causeOfDeath == undefined){
    Notifier.Notify("Cause of death field is empty", "danger", 2000);
  }
  else  if(this.deathModel.deathCertNo == undefined){
    Notifier.Notify("Death certificate field is empty", "danger", 2000);
  }
  else  if(this.deathModel.detailsOfPerson == undefined){
    Notifier.Notify("Bio field is empty", "danger", 2000);
  }
  else  if(this.deathModel.image == undefined){
    Notifier.Notify("No image was selected", "danger", 2000);
  }
  else{
    this.deathService.NewDeathRecord(this.deathModel).subscribe((response: ResponseMessage) => {
      if (response.statusCode == 200) {
        this.deathModel = response.data;
        this.router.navigate(['/search/death-register/details', this.deathModel.id], { replaceUrl: true });
        Notifier.Notify(response.message, "success", 2000);
      } else {
        Notifier.Notify(response.message, "danger", 2000);
      }
    });
  }

  }
   else {
    Notifier.Notify("Log in and try again.", "danger", 2000);
  }

}

}
