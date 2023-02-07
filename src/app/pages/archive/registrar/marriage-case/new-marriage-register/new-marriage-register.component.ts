import { Component, OnInit } from '@angular/core';
import { GenericModel } from 'src/app/models/genericModel';
import { Notifier } from 'src/app/models/notifier';
import { Marriage } from 'src/app/models/marriage';
import { FeatureType, Feature } from 'src/app/models/missing';
import { ActivatedRoute, Router } from '@angular/router';
import { SampleData } from 'src/app/modelSampleData/sampleData';
import { FeatureService } from 'src/app/service/feature.service';
import { ModelClass } from 'src/app/models/modelClass';
import { MarriageVM } from 'src/app/models/marriageVM';
import { MarriageService } from 'src/app/service/marriage.service';
import { ResponseMessage } from 'src/app/models/responseMessage';

@Component({
  selector: 'app-new-marriage-register',
  templateUrl: './new-marriage-register.component.html',
  styleUrls: ['./new-marriage-register.component.scss']
})
export class NewMarriageRegisterComponent implements OnInit {
  marriageModel:Marriage = new Marriage();
  marriageFeatures:Feature[] =[];
  marriageTypeFeatures:Feature[] =[];
  newMarriage:MarriageVM = new MarriageVM();

  marriageFeature:Feature = new Feature();
  marriageTypeFeature:Feature = new Feature();
  marriageFeatureValue = "";
  marriageType = "";


  featureType:string = "";
  featureValue:string = "";
  featureTypeID: string = "";

  isEdit: boolean = false;
  activeFeatureTypes: FeatureType[] = [];

  featureTypes: FeatureType[] = [];
  marriageTypes: FeatureType[] = [];
  marriageID: string = "";

  constructor(private activeRoute:ActivatedRoute, private router: Router, private featureService:FeatureService, private marriageService:MarriageService) { }

  ngOnInit() {
    if (!ModelClass.isLogged) {
      this.router.navigate(['/search/marriage-register']);
      Notifier.Notify("Log in and try again.", "danger", 2000);
    }
    this.activeRoute.params.subscribe(params => {
      this.marriageID = params['id'];
      if (this.marriageID != undefined) {
        this.isEdit = true;
      }

    });
    this.GetFeatureTypes();
  }

  GetFeatureTypes(){
    this.featureService.GetFeatureTypesByGroupCode("Marriage_Feature").subscribe((response: any) => {
      this.featureTypes = response;
    });
    this.featureService.GetFeatureTypesByGroupCode("Marriage_Type").subscribe((response: any) => {
      this.marriageTypes = response;
    });
  }

  AddFeature(){

    if(this.featureType == "")
    {
      Notifier.Notify('Marriage Feature is empty', 'danger', 0);
    }
    else if(this.featureValue == ""){
   Notifier.Notify('Details is empty', 'danger', 0);
    }else{
      this.marriageFeature.value = this.featureValue;
      this.PushValue(this.marriageFeature);

      this.featureValue = "";
      Notifier.Notify('Wedding Feature added', 'success', 0);
    }
  }

  AddMarriageTypeFeature(){
    if(this.marriageType == "")
    {
      Notifier.Notify('Marriage Type is empty', 'danger', 0);
    }
    else if(this.marriageFeatureValue == ""){
   Notifier.Notify('Details is empty', 'danger', 0);
    }else{
      this.marriageTypeFeature.value = this.marriageFeatureValue;
      this.PushTypeValue(this.marriageTypeFeature);

      this.marriageFeatureValue = "";
      Notifier.Notify('Wedding type added', 'success', 0);
    }
  }

  Setup(marriageFeature:Feature){
    var marF = new Feature();
    marF.createdBy =marriageFeature.createdBy;
    marF.itemID =marriageFeature.itemID;
    marF.value =marriageFeature.value;
    marF.featureGroupID = marriageFeature.featureGroupID;
    marF.featureType = marriageFeature.featureType;
    marF.featureTypeID = marriageFeature.featureTypeID;
    marF.countryID = marriageFeature.countryID;
    return marF;
  }

  PushValue(marriageFeature:Feature){
    this.marriageFeatures.push(this.Setup(marriageFeature));
  }
  PushTypeValue(feature:Feature){
    this.marriageTypeFeatures.push(this.Setup(feature));
  }

  SelectFeatureType(featureTypeName:string, typeID, groupID, typeName){
    this.marriageFeature = new Feature();
    this.marriageFeature.featureType = typeName;
    this.marriageFeature. featureTypeID = typeID;
    this.marriageFeature.featureGroupID = groupID;
    this.marriageFeature.countryID = ModelClass.user.countryID;
    this.marriageFeature.createdBy = ModelClass.user.id;
    this.featureType = featureTypeName;
  }

  SelectMarriageType(featureTypeName:string, typeID, groupID, typeName){
    this.marriageTypeFeature = new Feature();
    this.marriageTypeFeature.featureType = typeName;
    this.marriageTypeFeature. featureTypeID = typeID;
    this.marriageTypeFeature.featureGroupID = groupID;
    this.marriageTypeFeature.countryID = ModelClass.user.countryID;
    this.marriageTypeFeature.createdBy = ModelClass.user.id;
    this.marriageType = featureTypeName;
  }


  RemoveFeature(i:number){
    this.marriageFeatures.splice(i,1);
  }
  RemoveMarriageType(i:number){
    this.marriageTypeFeatures.splice(i,1);
  }


  OptionFileChangeEvent(fileInput: any) {

      GenericModel.FileChangeEvent(fileInput);

      setTimeout(() => {
        this.marriageModel.image = GenericModel.cardImageBase;
        }, 1000);
  }

  Post(){
    if (ModelClass.isLogged) {
      this.marriageModel.createdBy = ModelClass.user.id;
      this.marriageModel.countryID = ModelClass.user.countryID;
      this.newMarriage.marriage = this.marriageModel;

      this.newMarriage.features = [];

      for (let index = 0; index < this.marriageFeatures.length; index++) {
        this.newMarriage.features.push(this.marriageFeatures[index]);
      }

      for (let index = 0; index < this.marriageTypeFeatures.length; index++) {
        this.newMarriage.features.push(this.marriageTypeFeatures[index]);
      }

     if (this.newMarriage.marriage.groomFName == undefined || this.newMarriage.marriage.groomLName == undefined) {
      Notifier.Notify("Groom name incomplete", "danger", 2000);
     }
     else if (this.newMarriage.marriage.brideLName == undefined || this.newMarriage.marriage.brideFName == undefined) {
      Notifier.Notify("Bride name incomplete", "danger", 2000);
     }
     else if (this.newMarriage.marriage.weddingDate == undefined) {
      Notifier.Notify("Invalid wedding date", "danger", 2000);
     }
     else if (this.newMarriage.marriage.image == undefined) {
      Notifier.Notify("Invalid wedding picture", "danger", 2000);
     }
     else if (this.newMarriage.marriage.toast == undefined) {
      Notifier.Notify("Input wedding toast", "danger", 2000);
     }
     else if (this.marriageTypeFeatures.length == 0) {
      Notifier.Notify("Include wedding type", "danger", 2000);
     }
     else if (this.marriageFeatures.length == 0) {
      Notifier.Notify("Include wedding details", "danger", 2000);
     }
     else {
      this.marriageService.NewMarriage(this.newMarriage).subscribe((response: ResponseMessage) => {
        if (response.statusCode == 200) {
          this.router.navigate(['/search/marriage-register/details', response.data], { replaceUrl: true });
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
