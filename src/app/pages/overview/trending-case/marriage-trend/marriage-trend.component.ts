import { Component, OnInit, Input } from '@angular/core';
import { Marriage } from 'src/app/models/marriage';
import { Death } from 'src/app/models/death';
import { Router } from '@angular/router';
import { Trend } from 'src/app/models/trend';

@Component({
  selector: 'app-marriage-trend',
  templateUrl: './marriage-trend.component.html',
  styleUrls: ['./marriage-trend.component.scss']
})
export class MarriageTrendComponent implements OnInit {
  @Input() data:Trend = new Trend();

  constructor(private router:Router) { }

  @Input() marriageData: Marriage[] = [];
  @Input() deathData: Death[] = [];
  ngOnInit() {

  }
  MarriageRecordDetails(val){
    this.router.navigate(['/search/marriage-register/details', val]);
  }
  DeathRecordDetails(id:string){
    this.router.navigate(['/search/death-register/details', id]);
  }
  ViewRecord(loc){
    this.router.navigate(['/search/'+loc]);
  }
}
