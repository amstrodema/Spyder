import { Component, OnInit } from '@angular/core';
import { Confession } from 'src/app/models/confession';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { ActivatedRoute, Router } from '@angular/router';
import { Feed } from 'src/app/models/feed';
import { ConfessionServiceService } from 'src/app/service/confessionService.service';
import { ModelClass } from 'src/app/models/modelClass';

@Component({
  selector: 'app-whistle-details',
  templateUrl: './whistle-details.component.html',
  styleUrls: ['./whistle-details.component.scss']
})
export class WhistleDetailsComponent implements OnInit {
  route:string = "";
  recordID:string = "";
  feed:Feed = new Feed();

  constructor(private activeRoute:ActivatedRoute, private confessionServiceService:ConfessionServiceService, private router:Router) { }

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
