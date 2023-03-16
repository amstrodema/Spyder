import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginVM } from 'src/app/models/loginVM';
import { Notifier } from 'src/app/models/notifier';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  code:string;
  constructor(private activeRoute:ActivatedRoute, private router:Router, private userService:RegistrationService) { }
  isLoading:boolean = false;
  isSuccess: boolean = false;
  isProcessing: boolean = true;
  login: Login = new Login();
  userID:string;
  confirmPass: string;
  oldPass: string;
  isFinished = false;

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.code = params['id'];
      this.Reset();
    });
  }
  GotoLogin(){
    this.router.navigate(["/login"]);
  }
  GotoRegister(){
    this.router.navigate(["/register"]);
  }
  Reset(){
    this.userService
    .ResetPassword(this.code)
    .subscribe((response: ResponseMessage) => {
      if (response.statusCode == 200) {
        Notifier.Notify("Reset successful!", "success", 2000);
        this.isProcessing = false;
        this.isSuccess = true;
        this.oldPass = response.data;
        this.userID = response.message;
      } else {
        Notifier.Notify(response.message, "danger", 2000);
        this.isProcessing = false;
        this.isSuccess = false;
      }
    });
  }
  UpdatePassword(){
    if (this.login.password.length < 6  || this.login.password == undefined) {
      Notifier.Notify("Minimum of 6 password characters", "danger", 2000);
    }
    else  if (this.login.password != this.confirmPass) {
      Notifier.Notify("Password does not match", "danger", 2000);
    }
    else if(this.userID == "" || this.userID == undefined){
      Notifier.Notify("Password Update Failed", "danger", 2000);
    }
    else if(this.oldPass == "" || this.oldPass == undefined){
      Notifier.Notify("Password Update Failed", "danger", 2000);
    }
    else{
      this.isLoading = true;
      this.login.username = this.oldPass;
      this.userService
      .UpdatePassword(this.login, this.userID)
      .subscribe((response: ResponseMessage) => {
        if (response.statusCode == 200) {
          Notifier.Notify(response.message, "success", 2000);
          this.isLoading = false;
          this.isSuccess = true;
          this.isFinished = true;
        } else {
          Notifier.Notify(response.message, "danger", 2000);
          this.isLoading = false;
          this.isSuccess = false;
        }
      });
    }
  }
}
