import { ModelClass } from './../../../../../models/modelClass';
import { Component, OnInit, Input } from '@angular/core';
import { GenericModel } from 'src/app/models/genericModel';
import { Router } from '@angular/router';
import { DeathService } from 'src/app/service/death.service';
import { Death } from 'src/app/models/death';
import { Notifier } from 'src/app/models/notifier';

@Component({
  selector: 'app-death-register',
  templateUrl: './death-register.component.html',
  styleUrls: ['./death-register.component.scss']
})
export class DeathRegisterComponent implements OnInit {
   isGrid: boolean = ModelClass.isDeathGrid;
  deathRecords:Death[] =[];
  deathHolder:Death[] =[];

  isLoaded = false;

  btnBgTypeLike= "";
  btnBgTypeDisLike= "";
  toggleSearchFilterIndicator = false;
  genericModel: GenericModel = new GenericModel();

  searchString = "";

  constructor(private router:Router, private deathService:DeathService) { }

  ngOnInit() {
    this.GetRecord();
  }

  GetRecord(){
    this.deathService.GetDeathRecords().subscribe((response: any) => {
      this.deathRecords = response;
      this.deathHolder = response;
      this.isLoaded = true;
    });
  }


  SetGridView(val:boolean){
    this.isGrid = ModelClass.isDeathGrid = val;
    this.toggleSearchFilterIndicator = false;
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

  toggleSearchFilter(val){
    this.toggleSearchFilterIndicator = val;
    this.deathRecords = this.deathHolder;
  }

  NewDeathRecord(){
    if (ModelClass.isLogged) {
      this.router.navigate(['/search/death-register/new']);
    } else {
      Notifier.Notify("Log in and try again.", "danger", 2000);
    }

  }

  Search(){
    this.deathRecords = this.deathHolder.filter(p=> p.name.toLowerCase().includes(this.searchString.toLowerCase())  || p.deathDate.toLowerCase().includes(this.searchString.toLowerCase())  || p.birthDate.toLowerCase().includes(this.searchString.toLowerCase())  || p.deathCertNo.toLowerCase().includes(this.searchString.toLowerCase()))
  }

}
