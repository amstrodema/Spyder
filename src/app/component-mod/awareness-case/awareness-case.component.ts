import { Component, OnInit, Input } from '@angular/core';
import { FeatureGroup, Missing } from 'src/app/models/missing';
import { MissingService } from 'src/app/service/missing.service';
import { FeatureGroupService } from 'src/app/service/feature-group.service';
import { Router } from '@angular/router';
import { ModelClass } from 'src/app/models/modelClass';
import { Notifier } from 'src/app/models/notifier';
import { ParameterService } from 'src/app/service/parameter.service';
import { Parameter } from 'src/app/models/parameter';

@Component({
  selector: 'app-awareness-case',
  templateUrl: './awareness-case.component.html',
  styleUrls: ['./awareness-case.component.scss']
})
export class AwarenessCaseComponent implements OnInit {
  toggleSearchFilterIndicator: boolean = false;
  toggleFilterActiveClass = "btn-primary";
  toggleSearchActiveClass = "btn-default";
  @Input() awarenessTypeNo: number;
  @Input() target: number;

  isLoaded = false;

  featureGroup:string = "All Items";
  featureGroups: FeatureGroup[] = [];
  missingRecords:Missing[] = [];
  allMissingRecords:Missing[] = [];

  constructor(private router: Router, private featureGroupService:FeatureGroupService, private missingService: MissingService) { }

  ngOnInit() {
    this.GetFeatureGroupByGroupNo();
  }

  GetFeatureGroupByGroupNo() {
    this.featureGroupService
      .GetFeatureGroupByGroupNo(1)
      .subscribe((response: any) => {
        this.featureGroups = response;
        this.GetItemByGroupID("All");
      });
  }

  GetItemByGroupID(groupID:string) {
    this.missingService
      .GetMissingByItemGroupID(groupID, this.awarenessTypeNo)
      .subscribe((response: any) => {
        this.missingRecords = response;
        this.allMissingRecords = response;
        this.isLoaded = true;
      });
  }

  toggleSearchFilter(val){
    this.toggleSearchFilterIndicator = val;

    if(val){
      this.toggleFilterActiveClass = "btn-primary";
      this.toggleSearchActiveClass = "btn-default";
    }
    else{
      this.toggleSearchActiveClass = "btn-primary";
      this.toggleFilterActiveClass = "btn-default";
    }
  }

  SelectFeatureGroup(val:FeatureGroup){
    if(val.name != this.featureGroup){
      this.featureGroup = val.name;
      this.missingRecords = this.allMissingRecords.filter(m=> m.itemTypeID == val.id);
      // this.GetItemByGroupID(val.id);
    }
  }
  SelectAllFeatureGroup(val:string){
    if(val != this.featureGroup){
      this.featureGroup = val;
      // this.GetItemByGroupID("All");
      this.missingRecords = this.allMissingRecords
    }
  }

  NewMissing(){
    if(ModelClass.isLogged){
      this.router.navigate(['/search/missing/new']);
    }
    else{
      Notifier.Notify("Log in and try again.", "danger", 2000);
    }
  }

  MissingDetails(record: Missing){
    this.router.navigate([this.target, record.id]);
  }

}

