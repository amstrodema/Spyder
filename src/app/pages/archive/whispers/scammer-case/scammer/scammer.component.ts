import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelClass } from 'src/app/models/modelClass';
import { Notifier } from 'src/app/models/notifier';

@Component({
  selector: 'app-scammer',
  templateUrl: './scammer.component.html',
  styleUrls: ['./scammer.component.scss']
})
export class ScammerComponent implements OnInit {
  constructor(private router: Router) { }
  target:string;
  ngOnInit() {
    this.target = '/search/scammer/details';
  }

  newAwareness(){
    if (ModelClass.isLogged) {
      this.router.navigate(['/search/scammer/new']);
     } else {
      Notifier.Notify("Log in and try again.", "danger", 2000);
     }

  }

}
