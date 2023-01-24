import { LoginService } from './../../../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { Notifier } from 'src/app/models/notifier';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { Router } from '@angular/router';
import { ModelClass } from 'src/app/models/modelClass';
import { LoginVM } from 'src/app/models/loginVM';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginModel: Login = new Login();
  constructor(private loginService:LoginService, private router:Router) { }
  ngOnInit() {
  }

  Login(){
    if(this.loginModel.username == undefined || this.loginModel.username == ""){
      Notifier.Notify("Invalid email / username", "danger", 2000);
    }
    else if(this.loginModel.password == undefined || this.loginModel.password == ""){
      Notifier.Notify("Invalid password", "danger", 2000);
    }
    else{
      this.loginService.Login(this.loginModel).subscribe((response: ResponseMessage) => {
        if (response.statusCode == 200) {
          let loginVM: LoginVM = new LoginVM();
          // loginVM.user = response.data.user;
          // loginVM.settings = response.data.settings;

          sessionStorage.setItem("User", JSON.stringify(response.data.user));
          sessionStorage.setItem("Settings", JSON.stringify(response.data.settings));
          ModelClass.CheckLoggedIn();
          //To Do: use localStorage
          //localStorage.setItem("User", JSON.stringify(response.data));

          Notifier.Notify(response.message, "success", 2000);
          this.router.navigate(["search"], { replaceUrl: true });
        } else {
          Notifier.Notify(response.message, "danger", 2000);
        }
      });
    }
  }

  ForgotPassword(){
    console.log(this.loginModel.username);

    if(this.loginModel.username == undefined || this.loginModel.username == ""){
      Notifier.Notify("Invalid email / username", "danger", 2000);
    }
    else{
      this.loginService.ForgotPassword(this.loginModel.username).subscribe((response: ResponseMessage) => {
        if (response.statusCode == 200) {
          Notifier.Notify(response.message, "success", 2000);
        } else {
          Notifier.Notify(response.message, "danger", 2000);
        }
      });
    }
  }

  ResendVerification(){
    if(this.loginModel.username == undefined || this.loginModel.username == ""){
      Notifier.Notify("Invalid email / username", "danger", 2000);
    }
    else{
      this.loginService.ResendVerification(this.loginModel.username).subscribe((response: ResponseMessage) => {
        if (response.statusCode == 200) {
          Notifier.Notify(response.message, "success", 2000);
        } else {
          Notifier.Notify(response.message, "danger", 2000);
        }
      });
    }
  }

  Register(){
    this.router.navigate(["/register"], { replaceUrl: false });
  }

}
