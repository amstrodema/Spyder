import { Component, OnInit, Input } from '@angular/core';
import { Registration } from 'src/app/models/registration';
import { ModelClass } from 'src/app/models/modelClass';
import { ProfileService } from 'src/app/service/profile.service';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { Notifier } from 'src/app/models/notifier';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  constructor() { }
  isEdit = false;

   @Input() user:Registration = new Registration();
   @Input() userID:string = "";

  ngOnInit() {
    if(ModelClass.isLogged && ModelClass.user.id == this.userID){
      this.isEdit = true;

    }
  }


}
