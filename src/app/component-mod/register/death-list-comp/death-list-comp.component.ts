import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DeathService } from 'src/app/service/death.service';
import { Death } from 'src/app/models/death';

@Component({
  selector: 'app-death-list-comp',
  templateUrl: './death-list-comp.component.html',
  styleUrls: ['./death-list-comp.component.scss']
})
export class DeathListCompComponent implements OnInit {
  toggleSearchFilterIndicator: boolean = true;
  toggleFilterActiveClass = "btn-primary";
  toggleSearchActiveClass = "btn-default";
  isDetails:boolean = false;
  @Input() route: string;
  @Input() deathRecords:Death[] = [];
  @Input() dataHolder:Death[] = [];

  isFirstSearch = true;
  ss2 = "";
  ss3 = "";
  ss4 = "";
  ss5 = "";

  constructor(private router: Router, private deathService:DeathService) { }

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

  DeathRecordDetails(id:string){
    this.router.navigate(['/search/death-register/details', id]);
  }

  DataSearch(){
    if (this.isFirstSearch) {
      this.dataHolder = this.deathRecords;
      this.isFirstSearch = false;
    }

    if (this.ss2 != "") {
      this.deathRecords = this.dataHolder.filter(p=> p.name.toLowerCase().includes(this.ss2.toLowerCase()));
    }

    if (this.ss3 != "" && this.ss2 != "") {
      this.deathRecords = this.deathRecords.filter(p=> p.birthDate.toLowerCase().includes(this.ss3.toLowerCase()));
    }
    else if(this.ss3 != "") {
      this.deathRecords = this.dataHolder.filter(p=> p.birthDate.toLowerCase().includes(this.ss3.toLowerCase()));
    }

    if (this.ss4 != "" && (this.ss2 != "" || this.ss3 != "") ) {
      this.deathRecords = this.deathRecords.filter(p=> p.deathDate.toLowerCase().includes(this.ss4.toLowerCase()));
    }
    else if (this.ss4 != "") {
      this.deathRecords = this.dataHolder.filter(p=> p.deathDate.toLowerCase().includes(this.ss4.toLowerCase()));
    }

    if (this.ss5 != "" && (this.ss2 != "" || this.ss3 != ""|| this.ss4 != "") ) {
      this.deathRecords = this.deathRecords.filter(p=> p.deathCertNo.toLowerCase().includes(this.ss5.toLowerCase()));
    }
    else if (this.ss5 != "") {
      this.deathRecords = this.dataHolder.filter(p=> p.deathCertNo.toLowerCase().includes(this.ss5.toLowerCase()));
    }


    if (this.ss2 == "" && this.ss3 == "" && this.ss4 == "" && this.ss5 == "" ) {
      this.deathRecords = this.dataHolder;
    }

  }
}
