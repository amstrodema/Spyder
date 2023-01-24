import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SampleData } from 'src/app/modelSampleData/sampleData';
import { Confession } from 'src/app/models/confession';
import { ModelClass } from 'src/app/models/modelClass';
import { Notifier } from 'src/app/models/notifier';

@Component({
  selector: 'app-whistle',
  templateUrl: './whistle.component.html',
  styleUrls: ['./whistle.component.scss']
})
export class WhistleComponent implements OnInit {
  target: string;
  constructor(private router:Router) { }

  ngOnInit() {
    this.target = '/search/whistle-blower/details';
  }
  NewWhistle(){
    if (ModelClass.isLogged) {
       this.router.navigate(['/search/whistle-blower/new']);
     } else {
      Notifier.Notify("Log in and try again.", "danger", 2000);
     }

  }
}
