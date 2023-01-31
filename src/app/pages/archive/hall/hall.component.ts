import { GenericModel } from './../../../models/genericModel';
import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { HallRecord } from 'src/app/models/hall-record';
import { SampleData } from 'src/app/modelSampleData/sampleData';
import { HallService } from 'src/app/service/hall.service';
import { Hall } from 'src/app/models/hall';
import { ModelClass } from 'src/app/models/modelClass';
import { Notifier } from 'src/app/models/notifier';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss']
})
export class HallComponent implements OnInit {
  genericModel: GenericModel = new GenericModel();
  btnBgTypeLike= "";
  btnBgTypeDisLike= "";
  isFeed = true;
  hallName = "";
  location:Location;
  route: string;
  toggleSearchFilterIndicator = false;
  hallRecords: HallRecord[] =[];
  hallRecordsHolder: HallRecord[] =[];
  filterGroup: string = "All Items";
  halls: Hall[] = [];
  banner= "";
  isLoaded = false;

  constructor(location:Location, private router: Router, private hallService: HallService) {
    this.location = location;
   }

  ngOnInit() {
    let route = this.genericModel.GetRoute(this.location);
    this.GetHalls(route);
    switch (this.genericModel.GetTitle(this.location)) {
      case "Legends":
          this.hallName = "Hall of Legends";
          this.banner = "Very Famous People"
        break;
      case "Heros":
          this.hallName = "Hall of Heros";
          this.banner = "Exceptionally Courageous and Noble People";
        break;
      case "Hall of Fallen Heros":
          this.hallName = "Hall of Fallen Heros";
          this.banner = "Exceptionally Courageous and Noble Casualties";
        break;
      case "Hall of The Unforgotten":
          this.hallName = "Hall of The Unforgotten";
          this.banner = "Exceptionally Courageous and Noble Casualties";
        break;
      case "Hall of Fame":
          this.hallName = "Hall of Fame";
          this.banner = "Reputable & Famous People";
        break;
      case "Hall of Shame":
          this.hallName = "Hall of Shame";
          this.banner = "Disreputable & Discreditable People";
        break;

      default:
        break;
    }
  }


  GetHalls(route:string){
    // alert(route)
    this.hallService.GetHallMembers(route).subscribe((response: any) => {
      this.hallRecords = response;
      this.hallRecordsHolder = response;
      this.isLoaded = true;
      this.SelectFilterGroup("All Items");
    });
  }
  OpenFeeds(){
    // const modalRef = this.modalService.open(HerosComponent, { scrollable: true, });
    //   modalRef.result.then((result) =>{
    //   }).catch (onunhandledrejection=> {
    //   });
    this.isFeed = false;
  }
  CloseFeed(){
    this.isFeed = true;
  }

  NewHall(){
    if (ModelClass.isLogged) {
      this.router.navigate(['/search/petition/new']);
    } else {
      Notifier.Notify("Log in and try again.", "danger", 2000);
    }

  }

  toggleSearchFilter(val){
    this.toggleSearchFilterIndicator = val;
  }

  SelectFilterGroup(val){
    this.filterGroup = val;
    switch (val) {
      case "All Items":
          this.hallRecords = this.hallRecordsHolder;
        break;
        case "Liked":
            this.hallRecords = this.hallRecordsHolder.filter(x=> x.isReact && x.isLike)
          break;
          case "Disliked":
              this.hallRecords = this.hallRecordsHolder.filter(x=> x.isReact && !x.isLike)
            break;
          case "All Actions":
              this.hallRecords = this.hallRecordsHolder.filter(x=> x.isReact && (!x.isLike || x.isLike) )
            break;
          case "Unreacted":
              this.hallRecords = this.hallRecordsHolder.filter(x=> !x.isReact)
            break;

      default:
        break;
    }
  }

}
