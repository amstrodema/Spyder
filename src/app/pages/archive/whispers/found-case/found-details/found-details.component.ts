import { ModelClass } from './../../../../../models/modelClass';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-found-details',
  templateUrl: './found-details.component.html',
  styleUrls: ['./found-details.component.scss']
})
export class FoundDetailsComponent implements OnInit {

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
  Alert(){

  }
  SendMessage(){

  }

}
