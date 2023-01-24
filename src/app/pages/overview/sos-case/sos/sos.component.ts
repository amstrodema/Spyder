import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ModelClass } from 'src/app/models/modelClass';
import { Notifier } from 'src/app/models/notifier';

@Component({
  selector: 'app-sos',
  templateUrl: './sos.component.html',
  styleUrls: ['./sos.component.scss']
})
export class SosComponent implements OnInit {
  toggleSearchFilterIndicator: boolean = false;
  toggleFilterActiveClass = "btn-primary";
  toggleSearchActiveClass = "btn-default";
  constructor(private router:Router, titleService: Title) {
    titleService.setTitle("SPYDER: Save My Soul"); }

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
  NewSOS(){
    if (!ModelClass.isLogged) {
      this.router.navigate(['/search/sos/new']);
      Notifier.Notify("Log in and try again.", "danger", 2000);
    }

  }

  SosDetails(){
    this.router.navigate(['/search/sos/details', "this is the id"]);
  }

}
