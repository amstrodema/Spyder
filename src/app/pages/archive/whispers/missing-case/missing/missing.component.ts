import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeatureGroup, Missing } from 'src/app/models/missing';
import { SampleData } from 'src/app/modelSampleData/sampleData';
import { FeatureGroupService } from 'src/app/service/feature-group.service';
import { MissingService } from 'src/app/service/missing.service';
import { ModelClass } from 'src/app/models/modelClass';
import { Notifier } from 'src/app/models/notifier';

@Component({
  selector: 'app-missing',
  templateUrl: './missing.component.html',
  styleUrls: ['./missing.component.scss']
})
export class MissingComponent implements OnInit{

  constructor(private router: Router) { }
  target: string;

  ngOnInit() {
    this.target = '/search/missing/details';
  }

  NewMissing(){
    if (ModelClass.isLogged) {
      this.router.navigate(['/search/missing/new']);
     } else {
      Notifier.Notify("Log in and try again.", "danger", 2000);
     }

  }
}
