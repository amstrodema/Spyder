import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Marriage } from 'src/app/models/marriage';

@Component({
  selector: 'app-marriage-list-comp',
  templateUrl: './marriage-list-comp.component.html',
  styleUrls: ['./marriage-list-comp.component.scss']
})
export class MarriageListCompComponent implements OnInit {
  toggleSearchFilterIndicator: boolean = true;
  toggleFilterActiveClass = "btn-primary";
  toggleSearchActiveClass = "btn-default";
  @Input() route: string;
  @Input() data: Marriage[] = [];
  dataHolder: Marriage[] = [];
  isFirstSearch = true;

  ss1 = "";
  ss2 = "";
  ss3 = "";
  ss4 = "";
  ss5 = "";

  constructor(private router:Router) {
   }

  ngOnInit() {
  }

  DataSearch(){
    if (this.isFirstSearch) {
      this.dataHolder = this.data;
      this.isFirstSearch = false;
    }

    let sn = Number.parseInt(this.ss1);

    if (this.ss2 != "") {
      this.data = this.dataHolder.filter(p=> p.groomLName.toLowerCase().includes(this.ss2.toLowerCase()) || p.groomFName.toLowerCase().includes(this.ss2.toLowerCase()));
    }

    if (this.ss3 != "") {
      this.data = this.dataHolder.filter(p=> p.brideLName.toLowerCase().includes(this.ss3.toLowerCase()) || p.brideFName.toLowerCase().includes(this.ss3.toLowerCase()));
    }

    if (this.ss4 != "") {
      this.data = this.dataHolder.filter(p=> p.weddingDate.toLowerCase().includes(this.ss4.toLowerCase()));
    }

    if (this.ss5 != "") {
      this.data = this.dataHolder.filter(p=> p.status.toLowerCase().includes(this.ss5.toLowerCase()));
    }


    if (this.ss1 != "" && sn != undefined && sn != 0&& sn != NaN) {
     if(sn <= this.dataHolder.length){
      this.data = [];
      this.data.push(this.dataHolder[sn-1])
     }
    }

    if (this.ss2 == "" && this.ss1 == "" && this.ss3 == "" && this.ss4 == "" && this.ss5 == "" ) {
      this.data = this.dataHolder;
    }

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

  MarriageRecordDetails(val){
    this.router.navigate(['/search/marriage-register/details', val]);
  }
}
