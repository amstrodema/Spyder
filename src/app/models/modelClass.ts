import { Navbar } from './navbar';
import { Registration } from "./registration";
import { RequestObject } from "./requestObject";
import { GenericModel } from "./genericModel";
import { ScriptLoader } from "./script-loader";
import { Setting } from './setting';
import { NotificationHybrid } from './notificationHybrid';
import { NotificationService } from '../service/notification.service';

export class ModelClass {

static baseUrl:string = "http://localhost:38519/";
static baseUrl2:string = "http://localhost:4200/";

// static baseUrl:string = "https://api.logit.com.ng/";
// static baseUrl2:string = "https://spyder.logit.com.ng";
static isLogged:boolean = false;
static user:Registration;
static settings:Setting;
static prevRoute:string;
static errorPage:string;
static navBar:Navbar = new Navbar();
static isLoading:boolean = false;
static notificationHybrid: NotificationHybrid = new NotificationHybrid();

static GetRequestObject(){
   let requestObject:RequestObject = new RequestObject();
  try {
    requestObject.userID = ModelClass.user.id;
    if (ModelClass.settings.isLocalRange) {
      requestObject.countryID = ModelClass.settings.viewCountryID;
    }
    } catch (error) {

    }

    return requestObject;
}

static CheckLoggedIn(){
  let x = JSON.parse(sessionStorage.getItem("User"));
  if(x != null){
    this.isLogged = true;
    this.user = x;
    if (this.user.image == undefined) {
      let dummy:Registration = new Registration();
      this.user.image = dummy.image;
    }
    try {
      this.settings = JSON.parse(sessionStorage.getItem("Settings"));
    } catch (error) {

    }
    this.navBar.userName = this.user.username;
  }
  else{
    this.isLogged = false;
  }
}

static LoadScripts(){
  if(GenericModel.galleryLoadCount == 0)
  {
    GenericModel.galleryLoadCount = 1;
    ScriptLoader.loadLightboxScripts();
    ScriptLoader.loadmaxlength();
    ScriptLoader.loadMenuScripts();
  }
else{
}

ScriptLoader.loadScripts();
}

static LoadNavBar(){

}
}
