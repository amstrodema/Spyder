import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.scss']
})
export class PoolComponent implements OnInit {
  toggleSearchFilterIndicator: boolean = true;
  toggleFilterActiveClass = "btn-primary";
  toggleSearchActiveClass = "btn-default";
  isGrid:boolean;
  default = "DEFAULT";
  custom = "CUSTOM";
  isPool:boolean = true;
  thisVal = this;

  constructor() { }

  ngOnInit() {
  }

  toggleSearchFilter(val){
    this.toggleSearchFilterIndicator = val;

    if(val){
      this.toggleFilterActiveClass = "btn-primary";
      this.toggleSearchActiveClass = "btn-default";
    }
    else{
      this.toggleSearchActiveClass = "btn-primary";
      this.toggleFilterActiveClass = "btn-default";
    }
  }


  SetGridView(val:boolean){
    this.isGrid = val;
  }
}
