import { ConfessionServiceService } from './../../../../../service/confessionService.service';
import { Component, OnInit } from '@angular/core';
import { GenericModel } from 'src/app/models/genericModel';
import { Notifier } from 'src/app/models/notifier';
import { SampleData } from 'src/app/modelSampleData/sampleData';
import { ActivatedRoute, Router } from '@angular/router';
import { Confession } from 'src/app/models/confession';
import { ModelClass } from 'src/app/models/modelClass';
import { ResponseMessage } from 'src/app/models/responseMessage';

@Component({
  selector: 'app-new-confession',
  templateUrl: './new-confession.component.html',
  styleUrls: ['./new-confession.component.scss']
})
export class NewConfessionComponent implements OnInit
{

  constructor() { }

  ngOnInit() {
  }

}
