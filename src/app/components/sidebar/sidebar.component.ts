import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelClass } from 'src/app/models/modelClass';

declare function friendlist():any;
declare function back_chatBox():any;
declare function displayChatbox():any;

// { path: '/search/app/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  isLogged = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isLogged = ModelClass.isLogged;
  //  ScriptLoader.loadScripts();
  //   this.menuItems = ROUTES.filter(menuItem => menuItem);
  //   this.router.events.subscribe((event) => {
  //     this.isCollapsed = true;
  //  });
  }

  openFriendList(){
    friendlist();
  }
  backList(){
    back_chatBox();
  }
  moveSide(){
    displayChatbox();
  }
  whisperPages(val){
    switch (val) {
      case "confession":
        this.router.navigate(["/search/confessions"], { replaceUrl: false });
        break;
        case "missing":
          this.router.navigate(["/search/missing"], { replaceUrl: false });
          break;
      case "found":
        this.router.navigate(["/search/found"], { replaceUrl: false });
        break;
      case "stolen":
        this.router.navigate(["/search/stolen"], { replaceUrl: false });
        break;
      case "whistle":
        this.router.navigate(["/search/whistle-blowers"], { replaceUrl: false });
        break;
      case "wanted":
        this.router.navigate(["/search/wanted"], { replaceUrl: false });
        break;
      case "scammer":
        this.router.navigate(["/search/scammers"], { replaceUrl: false });
        break;

      default:
        break;
    }
  }

  DiscoveryPages(val){
    switch (val) {
      case "history":
        this.router.navigate(["/search/history"], { replaceUrl: false });
        break;
      case "trace":
        this.router.navigate(["/search/trace"], { replaceUrl: false });
        break;
      case "connect":
        this.router.navigate(["/search/connect"], { replaceUrl: false });
        break;

      default:
        break;
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

  hallPages(val){
    switch (val) {
      case "unforgotten":
        this.router.navigate(["/search/hall-of-the-unforgotten"], { replaceUrl: false });
        break;
      case "fame":
        this.router.navigate(["/search/hall-of-fame"], { replaceUrl: false });
        break;
      case "shame":
        this.router.navigate(["/search/hall-of-shame"], { replaceUrl: false });
        break;
      case "hero":
        this.router.navigate(["/search/hall-of-heros"], { replaceUrl: false });
        break;
      case "fallen":
        this.router.navigate(["/search/hall-of-fallen-heros"], { replaceUrl: false });
        break;
      case "legend":
        this.router.navigate(["/search/hall-of-legends"], { replaceUrl: false });
        break;

      default:
        break;
    }
  }

  openPage(val) {
    switch (val) {
      case "register":
        this.router.navigate(["/register"], { replaceUrl: false });
        break;
      case "login":
        this.router.navigate(["/login"], { replaceUrl: false });
        break;
      case "petitions":
        this.router.navigate(["/search/petitions"], { replaceUrl: false });
        break;
      case "trending":
        this.router.navigate(["/search/trending"], { replaceUrl: false });
        break;
      case "demise":
        this.router.navigate(["/search/death-register"], { replaceUrl: false });
        break;
      case "marriage":
        this.router.navigate(["/search/marriage-register"], { replaceUrl: false });
        break;
      case "item":
        this.router.navigate(["/search/item-register"], { replaceUrl: false });
        break;
      case "pools":
        this.router.navigate(["/search/pools"], { replaceUrl: false });
        break;
      case "sos":
        this.router.navigate(["/search/sos"], { replaceUrl: false });
        break;
        default:
        break;
    }

  }
}
