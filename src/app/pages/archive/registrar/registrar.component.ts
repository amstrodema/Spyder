import { GenericModel } from './../../../models/genericModel';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  genericModel: GenericModel = new GenericModel();
  btnBgTypeLike= "";
  btnBgTypeDisLike= "";
  isFeed = true;
  registerName = "";
  location:Location;
  isGrid = false;
  isMarriage = false;
  route: string;
  toggleSearchFilterIndicator = false;

  constructor(location:Location) {
    this.location = location;
   }

  ngOnInit() {
    this.registerName = this.genericModel.GetTitle(this.location);
    this.RegisterSelector();
    this.route = this.genericModel.GetRoute(this.location);
  }

  SetGridView(val:boolean){
    this.isGrid = val;
    this.toggleSearchFilterIndicator = false;
  }

  RegisterSelector(){
    if (this.registerName == "Death Register") {
      this.isMarriage = false
    } else {
      this.isMarriage = true
    }
  }

  ControlButtonBgType(isLike:boolean){
    if (isLike) {
      this.btnBgTypeDisLike= "";
      this.btnBgTypeLike= this.genericModel.ControlButtonBgType(isLike, this.btnBgTypeLike);

    }
    else{
      this.btnBgTypeLike= "";
      this.btnBgTypeDisLike= this.genericModel.ControlButtonBgType(isLike, this.btnBgTypeDisLike);
    }
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

  toggleSearchFilter(val){
    this.toggleSearchFilterIndicator = val;
  }

}
