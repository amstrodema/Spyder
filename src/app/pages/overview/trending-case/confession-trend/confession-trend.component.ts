import { Component, OnInit, Input } from '@angular/core';
import { Confession } from 'src/app/models/confession';
import { Router } from '@angular/router';
import { Trend } from 'src/app/models/trend';

@Component({
  selector: 'app-confession-trend',
  templateUrl: './confession-trend.component.html',
  styleUrls: ['./confession-trend.component.scss']
})
export class ConfessionTrendComponent implements OnInit {

  constructor(private router:Router) { }
  @Input() data:Trend = new Trend();
  @Input() confessionData: Confession[] = [];

  ngOnInit() {
  }

  Details(id){
    this.router.navigate(["/search/confession/details/", id]);
  }

  OpenProfile(){

  }
  ViewRecord(loc){
    this.router.navigate(['/search/'+loc]);
  }
}
