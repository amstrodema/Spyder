import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelClass } from 'src/app/models/modelClass';

@Component({
  selector: 'app-stolen-details',
  templateUrl: './stolen-details.component.html',
  styleUrls: ['./stolen-details.component.scss']
})
export class StolenDetailsComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute, private router: Router) { }
  route:string = "";
  recordID:string = "";

  ngOnInit() {
    this.route = this.router.url;

    this.activeRoute.params.subscribe(params => {
      this.recordID = params['id'];
      if (this.recordID == undefined) {
        try {
          this.router.navigate(['/search/'+ModelClass.errorPage]);
        } catch (error) {
          this.router.navigate(['/search/']);
        }
      }

    });
  }

  SendMessage(){

  }
  Alert(){

  }

}
