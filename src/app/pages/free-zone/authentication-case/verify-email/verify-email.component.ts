import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelClass } from 'src/app/models/modelClass';
import { Notifier } from 'src/app/models/notifier';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  constructor(private router:Router, private activeRoute: ActivatedRoute, private userService: RegistrationService) { }
  code:string;
  isLoading:boolean = true;
  isSuccess: boolean = false;

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.code = params['id'];
      this.Verify();
    });
  }
  GotoLogin(){
    this.router.navigate(["/login"]);
  }
  GotoRegister(){
    this.router.navigate(["/register"]);
  }

  Verify(){
    this.userService
    .VerifyNewAccount(this.code)
    .subscribe((response: ResponseMessage) => {
      if (response.statusCode == 200) {
        Notifier.Notify(response.message, "success", 2000);
        this.isLoading = false;
        this.isSuccess = true;
      } else {
        Notifier.Notify(response.message, "danger", 2000);
        this.isLoading = false;
        this.isSuccess = false;
      }
    });
  }

}
