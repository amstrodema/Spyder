import { Component, OnInit } from "@angular/core";
import { Setting } from "src/app/models/setting";
import { CountryService } from "src/app/service/country.service";
import { SettingService } from "src/app/service/setting.service";
import { Country } from "src/app/models/country";
import { ActivatedRoute, Router } from "@angular/router";
import { ResponseMessage } from "src/app/models/responseMessage";
import { Notifier } from "src/app/models/notifier";
import { ModelClass } from "src/app/models/modelClass";
import { RegistrationService } from "src/app/service/registration.service";
import { Login } from "src/app/models/login";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  constructor(
    private countryService: CountryService,
    private settingService: SettingService,
    private router: Router, private userService:RegistrationService
  ) {}

  setting: Setting = new Setting();
  countries: Country[] = [];
  userID: string;
  login:Login = new Login();
  confirmPass: string;
  oldPass: string;
  isLoading: boolean = false;

  ngOnInit(): void {
    if (!ModelClass.isLogged) {
      this.router.navigate(["/search"]);
    }
    else{
      this.userID = ModelClass.user.id;
      this.GetSettings();
      this.GetCountries();
    }
  }
  GetCountries() {
    this.countryService.GetCountries().subscribe((response: any) => {
      this.countries = response;
    });
  }
  GetSettings() {
    this.settingService.GetSettings().subscribe((response: ResponseMessage) => {
      if (response.statusCode == 200) {
        this.setting = response.data;
       }
       else {
          Notifier.Notify(response.message, "danger", 2000);
       }
    });
  }
  PutSettings() {
      if(this.setting.isLocalRange){
        if(this.setting.viewCountryID == ModelClass.defaultGuid){
          try {
            this.setting.viewCountryID = this.countries[0].id;
          } catch (error) {

          }
        }
      }

    this.settingService.PutSettings(this.setting).subscribe((response: ResponseMessage) => {
      if (response.statusCode == 200) {
        sessionStorage.setItem("Settings", JSON.stringify(this.setting));
        ModelClass.CheckLoggedIn();
        // this.user = response.data;
       }
       else {
          Notifier.Notify(response.message, "danger", 2000);
       }
    });
  }
  UpdatePassword(){
    if (!ModelClass.isLogged) {
      Notifier.Notify("Log in and try again", "danger", 2000);
    }
    else if (this.login.password.length < 6  || this.login.password == undefined) {
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
      this.userID = ModelClass.user.id;
      this.isLoading = true;
      this.login.username = this.oldPass;
      this.userService
      .UpdatePassword(this.login, this.userID)
      .subscribe((response: ResponseMessage) => {
        if (response.statusCode == 200) {
          Notifier.Notify(response.message, "success", 2000);
        } else {
          Notifier.Notify(response.message, "danger", 2000);
        }
          this.isLoading = false;
      });
    }
  }
}
