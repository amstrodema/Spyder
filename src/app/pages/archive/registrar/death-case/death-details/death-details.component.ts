import { Component, OnInit } from '@angular/core';
import { DeathService } from 'src/app/service/death.service';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { ActivatedRoute, Router } from '@angular/router';
import { Death } from 'src/app/models/death';
import { ModelClass } from 'src/app/models/modelClass';
import { Notifier } from 'src/app/models/notifier';

@Component({
  selector: 'app-death-details',
  templateUrl: './death-details.component.html',
  styleUrls: ['./death-details.component.scss']
})
export class DeathDetailsComponent implements OnInit {

  constructor(private deathService: DeathService, private activeRoute:ActivatedRoute, private router:Router) { }
  recordID: string;
  deathModel:Death = new Death();
  route: string;

  isLoaded = false;

  ngOnInit() {
    this.route = this.router.url;

    this.activeRoute.params.subscribe(params => {
      this.recordID = params['id'];
      if (this.recordID != undefined) {
        this.GetRecord();
      }
      else{
        try {
          this.router.navigate(['/search/'+ModelClass.errorPage]);
        } catch (error) {
          this.router.navigate(['/search/']);
        }
      }

    });
  }

  GetRecord(){
    this.deathService.GetDeathRecordDetails(this.recordID).subscribe((response: any) => {
      this.deathModel = response;
      this.isLoaded = true;
    });
  }

  Alert(){

  }
  SendMessage(){

  }
}
