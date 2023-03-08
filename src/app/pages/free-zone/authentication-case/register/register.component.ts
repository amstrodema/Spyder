import { Registration } from './../../../../models/registration';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService } from 'src/app/service/registration.service';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { Notifier } from 'src/app/models/notifier';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
registration:Registration =  new Registration();
refCode:string;
countries: Country[] = [];
confirmPassword: string = "";
isDisabled = false;
isAutoReferral = false;
  constructor(private activeRoute:ActivatedRoute,private countryService:CountryService, private router: Router, private registrationService: RegistrationService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.refCode = params['id'];
      if (this.refCode != undefined) {
        this.registration.refererCode = this.refCode;
        this.isAutoReferral = true;
      }
      this.GetCountries();
    });
  }

  GetCountries(){
    this.countryService.GetCountries().subscribe((response: any) => {
    this.countries = response;
    });
  }

  Post(){
    try {
      this.registration.username = this.registration.username.trim();
    this.registration.email = this.registration.email.trim();
    if (this.registration.username == "" || this.registration.username == null || this.registration.username == undefined) {
      Notifier.Notify("Username not valid", "danger", 2000);
    }
    else if (this.registration.username.length < 4) {
      Notifier.Notify("Username must be 4 or more letters", "danger", 2000);
    }
    else if (this.registration.fName == "" || this.registration.fName == null || this.registration.fName == undefined) {
      Notifier.Notify("First name not valid", "danger", 2000);
    }
    else if (this.registration.lName == "" || this.registration.lName == null || this.registration.lName == undefined) {
      Notifier.Notify("Last name not valid", "danger", 2000);
    }
    else if (this.registration.email == "" || this.registration.email == null || this.registration.email == undefined) {
      Notifier.Notify("Email not valid", "danger", 2000);
    }
    else if (this.registration.phone == "" || this.registration.phone == null || this.registration.phone == undefined) {
      Notifier.Notify("Phone No. not valid", "danger", 2000);
    }
    else if (this.registration.password.length < 6  || this.registration.password == undefined) {
      Notifier.Notify("Minimum of 6 password characters", "danger", 2000);
    }
    else  if (this.registration.password != this.confirmPassword) {
      Notifier.Notify("Password does not match", "danger", 2000);
    }
    else {
      this.isDisabled = true;
        this.registrationService.AddNewAccount(this.registration).subscribe((response: ResponseMessage) => {
      if (response.statusCode == 200) {
        Notifier.Notify(response.message, "success", 2000);
        this.router.navigate(["/login"], { replaceUrl: true });
      } else {
        this.isDisabled = false;
        Notifier.Notify(response.message, "danger", 2000);
      }
    });
    }
    } catch (error) {
      Notifier.Notify("Invalid entry", "danger", 2000);
    }
  }

  Login(){
    this.router.navigate(["/login"], { replaceUrl: false });
  }

}
