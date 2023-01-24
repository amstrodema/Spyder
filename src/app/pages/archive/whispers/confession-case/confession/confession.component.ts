import { Component, OnInit } from '@angular/core';
import { Confession } from 'src/app/models/confession';
import { SampleData } from 'src/app/modelSampleData/sampleData';
import { Router } from '@angular/router';
import { ConfessionServiceService } from 'src/app/service/confessionService.service';
import { ModelClass } from 'src/app/models/modelClass';
import { Notifier } from 'src/app/models/notifier';

@Component({
  selector: 'app-confession',
  templateUrl: './confession.component.html',
  styleUrls: ['./confession.component.scss']
})
export class ConfessionComponent implements OnInit {
  target:string;
  constructor(private router:Router) { }

  ngOnInit() {
    this.target = '/search/confession/details';
  }
  NewConfession(){
   if (ModelClass.isLogged) {
    this.router.navigate(['/search/confession/new']);
   } else {
    Notifier.Notify("Log in and try again.", "danger", 2000);
   }
  }

}
