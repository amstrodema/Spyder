import { Component, OnInit, Input } from '@angular/core';
import { Registration } from 'src/app/models/registration';
import { ModelClass } from 'src/app/models/modelClass';
import { ProfileService } from 'src/app/service/profile.service';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { Notifier } from 'src/app/models/notifier';
import { GenericModel } from 'src/app/models/genericModel';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  constructor(private profileService: ProfileService) { }
  isEdit:boolean = false;

   @Input() user:Registration = new Registration();
   @Input() userID:string = "";

  ngOnInit() {
    if(ModelClass.isLogged && ModelClass.user.id == this.userID){
      this.isEdit = true;

    }
  }
  OptionFileChangeEvent(fileInput: any) {
    GenericModel.FileChangeEvent(fileInput);

    setTimeout(() => {
      this.user.image = GenericModel.cardImageBase;

      this.profileService.SetUserImage(this.user.image).subscribe((response: ResponseMessage) => {
        if (response.statusCode == 200) {
          Notifier.Notify(response.message, "success", 2000);
          sessionStorage.setItem("User", JSON.stringify(this.user));
        } else {
          Notifier.Notify(response.message, "danger", 2000);
        }
        ModelClass.CheckLoggedIn();
      });
    }, 1000);
  }


}
