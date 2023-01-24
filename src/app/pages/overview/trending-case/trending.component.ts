import { Component, OnInit } from '@angular/core';
import { TrendingService } from 'src/app/service/trending.service';
import { Trend } from 'src/app/models/trend';
import { ResponseMessage } from 'src/app/models/responseMessage';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  route:string;
  constructor(private trendingService:TrendingService) { }
  trendData:Trend;

  ngOnInit() {
    this.GetTrends();
  }

  GetTrends(){
    this.trendingService.GetTrending().subscribe((response: ResponseMessage) => {
      this.trendData = response.data;
    });

  }
}
