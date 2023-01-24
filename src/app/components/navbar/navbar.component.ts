import { ScriptLoader } from './../../models/script-loader';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { ModelClass } from 'src/app/models/modelClass';
import { LogoutService } from 'src/app/service/logout.service';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { Notifier } from 'src/app/models/notifier';
import { Registration } from 'src/app/models/registration';
import { Navbar } from 'src/app/models/navbar';
import { SearchService } from 'src/app/service/search.service';
import { SearchVM } from 'src/app/models/searchVM';
import { NotificationService } from 'src/app/service/notification.service';
import { NotificationHybrid } from 'src/app/models/notificationHybrid';
 declare function displayChatbox():any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  isLoggedIn: boolean = false;
  navbar = ModelClass.navBar;
  searchVM: SearchVM[] = [];
  searchString = "";
  isLoading = false;
  notFound = false;
  notificationHybrid: NotificationHybrid = ModelClass.notificationHybrid;

  constructor( private element: ElementRef, private router: Router, private logOutService: LogoutService, private notificationService:NotificationService,
     private searchService: SearchService) {
  }

  ngOnInit() {
    ModelClass.LoadScripts();
    ModelClass.CheckLoggedIn();
    this.navbar.image = ModelClass.user.image;
    this.isLoggedIn = ModelClass.isLogged;
    this.GetAllNotificationAlert();
  }

  moveSide(){
    displayChatbox();
  }

  LogOut(){
   try {
    this.logOutService.LogOut(ModelClass.user.id).subscribe((response: ResponseMessage) => {
      if (response.statusCode == 200) {
        sessionStorage.clear();
        this.router.navigate([""], { replaceUrl: true });
        ModelClass.isLogged = false;
        this.notFound = false;
        ModelClass.user = new Registration();
        this.navbar = ModelClass.navBar = new Navbar();
        Notifier.Notify(response.message, "success", 2000);
      } else {
        Notifier.Notify(response.message, "danger", 2000);
      }
      });
   } catch (error) {
    Notifier.Notify("Log out failed", "danger", 2000);
   }
  }

  FreeZonePages(val){
    switch (val) {
      case "wallet":
        this.router.navigate(["/search/wallet"], { replaceUrl: false });
        break;
      case "rank":
        this.router.navigate(["/search/rank"], { replaceUrl: false });
        break;
      case "market":
        this.router.navigate(["/search/market-place"], { replaceUrl: false });
        break;

      default:
        break;
    }
  }
  openPage(val) {
    switch (val) {
      case "petition":
        this.router.navigate(["/search/petition"], { replaceUrl: false });
        break;
      default:
        break;
    }

  }

  openProfile(){
    if (ModelClass.isLogged) {
      this.router.navigate(['/search/profile']);
    } else {
      Notifier.Notify("Log in and try again", "danger", 2000);
    }
  }

  openSettings(){
    if (ModelClass.isLogged) {
      this.router.navigate(['/search/settings']);
    } else {
      Notifier.Notify("Log in and try again", "danger", 2000);
    }
  }

  openNotifications(){
    if (ModelClass.isLogged) {
      this.router.navigate(['/search/notifications'], { replaceUrl: false });
    } else {
      Notifier.Notify("Log in and try again", "danger", 2000);
    }
  }
  GlobalSearch(){
   if (this.searchString == "" || this.searchString == undefined || this.searchString.length > 30|| this.searchString.trim() == "") {
    Notifier.Notify("Invalid search", "danger", 2000);
   } else {
  this.notFound = false;
    this.searchVM = [];
    this.isLoading = true;
    this.searchService.GlobalSearch(this.searchString.trim()).subscribe((response: ResponseMessage) => {
      if (response.statusCode == 200) {
       this.searchVM = response.data;
       this.notFound= false;
       if (this.searchVM.length < 1) {
        this.notFound= true;
       }
      }
      else {
         Notifier.Notify(response.message, "danger", 2000);
         this.notFound= true;
      }
      this.isLoading = false;
    });
   }
 }

 GetAllNotificationAlert(){
  this.notificationService.GetAllNotificationAlert().subscribe((response: any) => {
    ModelClass.notificationHybrid = this.notificationHybrid = response;
    // console.log(ModelClass.notificationHybrid);

  });
}

 CloseSearch(){
  this. ClearSearch();
 }

 ClearSearch(){
  this.isLoading = false;
  this.searchVM = [];
  this.searchString = "";
  this.notFound = false;
 }

 ItemClick(valueType: string, id: string){
   switch (valueType) {
     case "Confession":
     this.router.navigate(['/search/confession/details', id]);
       break;
     case "Scammer":
     this.router.navigate(['/search/scammer/details', id]);
       break;
     case "Whistle Blower":
     this.router.navigate(['/search/whistle-blower/details', id]);
       break;
     case "Missing":
     this.router.navigate(['/search/missing/details', id]);
       break;
     case "Stolen":
     this.router.navigate(['/search/stolen/details', id]);
       break;
     case "Found":
     this.router.navigate(['/search/found/details', id]);
       break;
     case "Death":
     this.router.navigate(['/search/death-register/details', id]);
       break;
     case "Marriage":
     this.router.navigate(['/search/marriage-register/details', id]);
       break;
     case "Petition":
     this.router.navigate(['/search/petition/details', id]);
       break;
     case "Hall":
     this.router.navigate(['/search/hall/details', id]);
       break;

     default:
       break;
   }
 }

}
