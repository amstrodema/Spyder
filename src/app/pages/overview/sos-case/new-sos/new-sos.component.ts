import { Component, OnInit } from '@angular/core';
import { Sos } from 'src/app/models/sos';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericModel } from 'src/app/models/genericModel';
import { ModelClass } from 'src/app/models/modelClass';
import { Notifier } from 'src/app/models/notifier';

@Component({
  selector: 'app-new-sos',
  templateUrl: './new-sos.component.html',
  styleUrls: ['./new-sos.component.scss']
})
export class NewSosComponent implements OnInit {
sosModel:Sos = new Sos();
sosID: string;
isEdit: boolean = false;

  constructor(private activeRoute:ActivatedRoute, private router: Router) { }

  ngOnInit() {

    if (!ModelClass.isLogged) {
      this.router.navigate(['/search/sos']);
      Notifier.Notify("Log in and try again.", "danger", 2000);
    }
    this.activeRoute.params.subscribe(params => {
      this.sosID = params['id'];
      if (this.sosID != undefined) {
        this.isEdit = true;
      }

    });
  }

  SetAlertType(val:number){
    if(val == 1){
      this.sosModel.sosType = "Red Alert"
    }
    else if(val == 2){
      this.sosModel.sosType = "Yellow Alert"
    }
    else{
      this.sosModel.sosType = "Green Alert"
    }
  }


  OptionFileChangeEvent(fileInput: any) {

    GenericModel.FileChangeEvent(fileInput);

    setTimeout(() => {
      this.sosModel.image = GenericModel.cardImageBase;
      }, 1000);
}

Post(){
  this.router.navigate(['/search/sos/details', "kjnkjnkjnjn"], { replaceUrl: true });
}
}
