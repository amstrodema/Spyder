import { Feature, FeatureVM } from 'src/app/models/missing';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModelClass } from 'src/app/models/modelClass';
import { MarriageService } from 'src/app/service/marriage.service';
import { Notifier } from 'src/app/models/notifier';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { Marriage } from 'src/app/models/marriage';
import { MarriageVM } from 'src/app/models/marriageVM';

@Component({
  selector: 'app-marriage-details',
  templateUrl: './marriage-details.component.html',
  styleUrls: ['./marriage-details.component.scss']
})
export class MarriageDetailsComponent implements OnInit {

  constructor(private router:Router, private activeRoute:ActivatedRoute, private marriageService: MarriageService) { }
  route:string = "";
  recordID:string = "";
  marriage:Marriage = new Marriage();
  features:FeatureVM[] = [];
  marriageTypes:FeatureVM[] = [];

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
    this.marriageService.GetMarriageVMByID(this.recordID).subscribe((response: any) => {
      var marriageVM:MarriageVM = response;

      this.marriage = marriageVM.marriage;
      var featureVMs:FeatureVM[] = marriageVM.featureVMs;

      this.isLoaded = true;
      try {
        this.features = featureVMs.filter(p=> p.featureGroup == "Marriage_Feature");

      } catch (error) {

      }
      try {

        this.marriageTypes = featureVMs.filter(p=> p.featureGroup == "Marriage_Type");

      } catch (error) {

      }
     });
  }

  SendMessage(){}
  Alert(){}
}
