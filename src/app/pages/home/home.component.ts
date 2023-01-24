import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelClass } from 'src/app/models/modelClass';
import { GenericModel } from 'src/app/models/genericModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  getStarted(){
    this.router.navigate(["search"]);
  }
}
