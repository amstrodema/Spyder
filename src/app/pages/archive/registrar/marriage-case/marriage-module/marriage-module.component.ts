import { Component, OnInit, Input } from '@angular/core';
import { GenericModel } from 'src/app/models/genericModel';
import { Router } from '@angular/router';
import { MarriageService } from 'src/app/service/marriage.service';
import { Marriage } from 'src/app/models/marriage';
import { Notifier } from 'src/app/models/notifier';
import { ModelClass } from 'src/app/models/modelClass';
@Component({
  selector: 'app-marriage-module',
  templateUrl: './marriage-module.component.html',
  styleUrls: ['./marriage-module.component.scss']
})
export class MarriageModuleComponent implements OnInit {
  @Input() isGrid: boolean;
  @Input() route: string;
  data:Marriage[] =[];
  dataHolder:Marriage[] =[];
  btnBgTypeLike= "";
  btnBgTypeDisLike= "";
  toggleSearchFilterIndicator = false;
  genericModel: GenericModel = new GenericModel();

  isLoaded = false;

  searchString = "";

  constructor(private router:Router, private marriageService:MarriageService) { }

  ngOnInit() {
    this.GetRecords();
  }

  SetGridView(val:boolean){
    this.isGrid = val;
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
    this.data = this.dataHolder;
  }

  NewMarriageRecord(){
    if (ModelClass.isLogged) {
      this.router.navigate(['/search/marriage-register/new']);
    } else {
      Notifier.Notify("Log in and try again.", "danger", 2000);
    }

  }
  GetRecords(){
    this.marriageService.GetMarriages().subscribe((response: any) => {
      this.data = response;
      this.dataHolder = response;
      this.isLoaded = true;
     });
  }

  Search(){
    this.data = this.dataHolder.filter(p=> p.groomFName.toLowerCase().includes(this.searchString.toLowerCase())
    || p.groomLName.toLowerCase().includes(this.searchString.toLowerCase())
    || p.brideFName.toLowerCase().includes(this.searchString.toLowerCase())
    || p.brideLName.toLowerCase().includes(this.searchString.toLowerCase())
    || p.weddingDate.toLowerCase().includes(this.searchString.toLowerCase())
    || p.status.toLowerCase().includes(this.searchString.toLowerCase()))
  }
}
