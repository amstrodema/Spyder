import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wanted',
  templateUrl: './wanted.component.html',
  styleUrls: ['./wanted.component.scss']
})
export class WantedComponent implements OnInit {
  toggleSearchFilterIndicator: boolean = false;
  toggleFilterActiveClass = "btn-primary";
  toggleSearchActiveClass = "btn-default";
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

  NewWanted(){
    
  }

  WantedDetails(){

  }

}
