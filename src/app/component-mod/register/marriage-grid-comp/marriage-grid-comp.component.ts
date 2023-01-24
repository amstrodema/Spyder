import { Component, OnInit, Input } from '@angular/core';
import { GenericModel } from 'src/app/models/genericModel';
import { Router } from '@angular/router';
import { Marriage } from 'src/app/models/marriage';

@Component({
  selector: 'app-marriage-grid-comp',
  templateUrl: './marriage-grid-comp.component.html',
  styleUrls: ['./marriage-grid-comp.component.scss']
})
export class MarriageGridCompComponent implements OnInit {

  genericModel: GenericModel = new GenericModel();
  btnBgTypeLike= "";
  btnBgTypeDisLike= "";
  @Input() route: string;
  @Input() data: Marriage[] = [];
  constructor(private router:Router) { }

  ngOnInit() {
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

  MarriageRecordDetails(id){
    this.router.navigate(['/search/marriage-register/details', id]);
  }
}
