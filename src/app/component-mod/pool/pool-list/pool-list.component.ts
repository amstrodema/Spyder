import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pool-list',
  templateUrl: './pool-list.component.html',
  styleUrls: ['./pool-list.component.scss']
})
export class PoolListComponent implements OnInit {
 @Input() thisVal:any;
@Input() isPool = true;
  constructor() { }

  ngOnInit() {
  }

  CloseFeed(){
    this.isPool = true;
    this.thisVal.isPool = true;
  }

  OpenFeed(){
    this.isPool = false;
    this.thisVal.isPool = false;
  }
}
