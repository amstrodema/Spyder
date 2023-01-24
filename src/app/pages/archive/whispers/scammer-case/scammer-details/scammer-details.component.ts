import { Component, OnInit } from '@angular/core';
import { ModelClass } from 'src/app/models/modelClass';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-scammer-details',
  templateUrl: './scammer-details.component.html',
  styleUrls: ['./scammer-details.component.scss']
})
export class ScammerDetailsComponent implements OnInit{

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
