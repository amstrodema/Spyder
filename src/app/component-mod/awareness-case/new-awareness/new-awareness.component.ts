import { Component, OnInit, Input } from '@angular/core';
import { ModelClass } from 'src/app/models/modelClass';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { Notifier } from 'src/app/models/notifier';
import { GenericModel } from 'src/app/models/genericModel';
import { Feature, FeatureGroup, FeatureType, Missing } from 'src/app/models/missing';
import { Router, ActivatedRoute } from '@angular/router';
import { MissingVM } from 'src/app/models/missingVM';
import { FeatureGroupService } from 'src/app/service/feature-group.service';
import { MissingService } from 'src/app/service/missing.service';
import { FeatureService } from 'src/app/service/feature.service';

@Component({
  selector: 'app-new-awareness',
  templateUrl: './new-awareness.component.html',
  styleUrls: ['./new-awareness.component.scss']
})
export class NewAwarenessComponent implements OnInit {
  isEdit: boolean = false;
  missingID: string;
  missingModel: Missing = new Missing();
  isAnonymous: boolean = false;

  @Input() awarenessTypeNo: number;

  activeFeatureTypes: FeatureType[] = [];
  featureType: string = "";
  featureGroup: string = "";
  featureGroups: FeatureGroup[] = [];
  featureValue: string = "";

  selectedGroup: FeatureGroup = new FeatureGroup();
  selectedType: FeatureType = new FeatureType();

  missingVM:MissingVM = new MissingVM();

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private featureGroupService: FeatureGroupService,
    private featureService: FeatureService,
    private missingService: MissingService
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.missingID = params["id"];
      if (this.missingID != undefined) {
        this.isEdit = true;
      }
    });

    this.GetFeatureGroupByGroupNo();
    // this.featureTypes = SampleData.featureTypes;
    // this.featureGroups = SampleData.featureGroups;
    // this.missingModel.features = SampleData.features;
  }

  FilterFeatureType(featureGroupCode) {
    this.featureService
      .GetFeatureTypesByGroupCode(featureGroupCode)
      .subscribe((response: any) => {
        this.activeFeatureTypes = response;
        if (
          this.activeFeatureTypes != null &&
          this.activeFeatureTypes.length > 0
        ) {
          this.SelectFeatureType(this.activeFeatureTypes[0]);
        } else {
          this.SelectFeatureType(new FeatureType());
        }
      });
  }

  GetFeatureGroupByGroupNo() {
    this.featureGroupService
      .GetFeatureGroupByGroupNo(1)
      .subscribe((response: any) => {
        this.featureGroups = response;

        if (this.featureGroups != null && this.featureGroups.length > 0) {
          this.featureGroup = this.featureGroups[0].name;
          this.missingModel.itemTypeID = this.featureGroups[0].id;
          this.FilterFeatureType(this.featureGroups[0].code);
        } else {
        }
      });
  }

  SelectFeatureType(val: FeatureType) {
    this.selectedType = val;
    this.featureType = val.name;
  }
  SelectFeatureGroup(val: FeatureGroup) {
    if (val != this.selectedGroup) {
      this.selectedGroup = val;
      this.featureGroup = val.name;
      this.missingModel.itemTypeID = val.id;
      this.FilterFeatureType(val.code);
      this.missingVM.features = [];
    }
  }

  AddFeature(val: string) {
    if (val == "") {
      Notifier.Notify("Empty feature", "danger", 0);
    } else {
      var newFeature: Feature = new Feature();
      newFeature.value = val;
      newFeature.featureGroupID = this.selectedGroup.id;
      newFeature.featureTypeID = this.selectedType.id;
      newFeature.featureType = this.featureType;
      newFeature.featureGroup = this.featureGroup;
      newFeature.createdBy = ModelClass.user.id;

      this.missingVM.features.push(newFeature);

      this.featureValue = "";
      Notifier.Notify("Feature added", "success", 0);
    }
  }

  RemoveFeature(i: number) {
    this.missingVM.features.splice(i, 1);
  }

  OptionFileChangeEvent(fileInput: any) {
    GenericModel.FileChangeEvent(fileInput);

    setTimeout(() => {
      this.missingModel.image = GenericModel.cardImageBase;
    }, 1000);
  }

  SetAnonymous(val) {
    this.isAnonymous = val;
  }

  Post() {
    if (ModelClass.isLogged) {
       this.missingModel.createdBy = ModelClass.user.id;
    this.missingModel.countryID = ModelClass.user.countryID;
    this.missingModel.awarenessTypeNo = this.awarenessTypeNo;
    this.missingVM.missing = this.missingModel;

    if(this.missingModel.title == undefined){
      Notifier.Notify("Name of "+this.featureGroup+ " not found", "danger", 2000);
    }
    else if(this.missingModel.desc == undefined){
      Notifier.Notify("Description of "+this.featureGroup+ " not found", "danger", 2000);
    }
    else if(this.missingModel.lastSeen == undefined){
      Notifier.Notify("Last seen location of "+this.featureGroup+ " not found", "danger", 2000);
    }
    else if(this.missingModel.fullInfo == undefined){
      Notifier.Notify("Details of incidence not found", "danger", 2000);
    }
    else if(this.missingModel.image == undefined || this.missingModel.image == ""){
      Notifier.Notify("Image of "+this.featureGroup+ " not found", "danger", 2000);
    }
    else if(this.missingVM.features == undefined || this.missingVM.features.length < 1){
      Notifier.Notify("Features of "+this.featureGroup+ " not found", "danger", 2000);
    }
    else{
       this.missingService.NewMissing(this.missingVM).subscribe((response: ResponseMessage) => {
     if (response.statusCode == 200) {
       if(this.awarenessTypeNo == 1){
        this.router.navigate(['/search/missing/details', response.data], { replaceUrl: true });
       }
       else if(this.awarenessTypeNo == 2){
        this.router.navigate(['/search/stolen/details', response.data], { replaceUrl: true });
      }
      else if(this.awarenessTypeNo == 3){
        this.router.navigate(['/search/found/details', response.data], { replaceUrl: true });
      }

       Notifier.Notify(response.message, "success", 2000);
      } else {
        Notifier.Notify(response.message, "danger", 2000);
     }
    });
    }


    } else {
      Notifier.Notify("Log in and try again.", "danger", 2000);
    }

  }
}
