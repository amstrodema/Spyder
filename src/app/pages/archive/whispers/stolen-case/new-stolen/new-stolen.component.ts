import { Missing, FeatureType, FeatureGroup, Feature } from './../../../../../models/missing';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptLoader } from 'src/app/models/script-loader';
import { SampleData } from 'src/app/modelSampleData/sampleData';
import { Notifier } from 'src/app/models/notifier';
import { GenericModel } from 'src/app/models/genericModel';

@Component({
  selector: 'app-new-stolen',
  templateUrl: './new-stolen.component.html',
  styleUrls: ['./new-stolen.component.scss']
})
export class NewStolenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
