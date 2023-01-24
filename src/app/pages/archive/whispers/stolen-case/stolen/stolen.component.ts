import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelClass } from 'src/app/models/modelClass';
import { Notifier } from 'src/app/models/notifier';

@Component({
  selector: 'app-stolen',
  templateUrl: './stolen.component.html',
  styleUrls: ['./stolen.component.scss']
})
export class StolenComponent implements OnInit {
  constructor(private router: Router) { }
  target:string;
  ngOnInit() {
    this.target = '/search/stolen/details';
  }

  newstolen(){
     if (ModelClass.isLogged) {
       this.router.navigate(['/search/stolen/new']);
   } else {
    Notifier.Notify("Log in and try again.", "danger", 2000);
   }

  }

}
