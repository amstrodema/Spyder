import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericModel } from 'src/app/models/genericModel';
import { Confession } from 'src/app/models/confession';
import { ModelClass } from 'src/app/models/modelClass';
import { Notifier } from 'src/app/models/notifier';

@Component({
  selector: 'app-new-whistle',
  templateUrl: './new-whistle.component.html',
  styleUrls: ['./new-whistle.component.scss']
})
export class NewWhistleComponent implements OnInit {
  constructor (private router:Router){

  }
  ngOnInit() {
    if (!ModelClass.isLogged) {
      this.router.navigate(['/search/whistle-blower']);
      Notifier.Notify("Log in and try again.", "danger", 2000);
    }
  }
}
