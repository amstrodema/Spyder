import { Component, OnInit, Input } from '@angular/core';
import { Missing } from 'src/app/models/missing';
import { Router } from '@angular/router';
import { Trend } from 'src/app/models/trend';

@Component({
  selector: 'app-missing-trend',
  templateUrl: './missing-trend.component.html',
  styleUrls: ['./missing-trend.component.scss']
})
export class MissingTrendComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() data:Trend = new Trend();
  @Input() missingData: Missing[] = [];
  @Input() stolenData: Missing[] = [];
  ngOnInit() {

  }
  MissingDetails(record: Missing){
    this.router.navigate(["/search/missing/details", record.id]);
  }
  ViewRecord(loc){
    this.router.navigate(['/search/'+loc]);
  }
}
