import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfessionServiceService } from 'src/app/service/confessionService.service';
import { Confession } from 'src/app/models/confession';
import { ModelClass } from 'src/app/models/modelClass';
import { Feed } from 'src/app/models/feed';
import { ResponseMessage } from 'src/app/models/responseMessage';

@Component({
  selector: 'app-confession-details',
  templateUrl: './confession-details.component.html',
  styleUrls: ['./confession-details.component.scss']
})
export class ConfessionDetailsComponent implements OnInit {
  route:string = "";
  recordID:string = "";

  constructor(private activeRoute:ActivatedRoute, private router:Router) { }

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
}
