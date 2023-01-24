import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pod-list',
  templateUrl: './pod-list.component.html',
  styleUrls: ['./pod-list.component.scss']
})
export class PodListComponent implements OnInit {
@Input() isPool:boolean = false
  constructor(private router:Router) { }

  ngOnInit() {
  }

  loadConnect(){
    this.router.navigate(["/search/connect"], { replaceUrl: false });
  }
}
