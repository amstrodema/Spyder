import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pool-grid',
  templateUrl: './pool-grid.component.html',
  styleUrls: ['./pool-grid.component.scss']
})
export class PoolGridComponent implements OnInit {
  isPool = true;
  poolName = "";
 @Input() poolType:string = "DEFAULT";

  constructor() { }

  ngOnInit() {
  }

  CloseFeed(){
    this.isPool = true;
  }

  OpenFeed(){
    this.isPool = false;
  }
}
