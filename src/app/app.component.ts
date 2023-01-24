import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ModelClass } from './models/modelClass';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  implements OnInit{
  title = 'Dashboard';

  ngOnInit() {
    ModelClass.CheckLoggedIn();
  }
}
