import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelClass } from 'src/app/models/modelClass';
import { Notifier } from 'src/app/models/notifier';

@Component({
  selector: 'app-found-case',
  templateUrl: './found-case.component.html',
  styleUrls: ['./found-case.component.scss']
})
export class FoundCaseComponent implements OnInit {

  constructor(private router: Router) { }
  target: string;

  ngOnInit() {
    this.target = '/search/found/details';
  }

  NewAwareness(){
    if(ModelClass.isLogged){
      this.router.navigate(['/search/found/new']);
    }
    else{
      Notifier.Notify("Log in and try again.", "danger", 2000);
    }

  }
}
