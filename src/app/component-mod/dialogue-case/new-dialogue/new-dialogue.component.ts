import { Component, OnInit, Input } from '@angular/core';
import { Notifier } from 'src/app/models/notifier';
import { ModelClass } from 'src/app/models/modelClass';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { GenericModel } from 'src/app/models/genericModel';
import { ConfessionServiceService } from 'src/app/service/confessionService.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Confession } from 'src/app/models/confession';
import { ParameterService } from 'src/app/service/parameter.service';
import { Parameter } from 'src/app/models/parameter';
import { CountryService } from 'src/app/service/country.service';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-new-dialogue',
  templateUrl: './new-dialogue.component.html',
  styleUrls: ['./new-dialogue.component.scss']
})
export class NewDialogueComponent implements OnInit  {
  isEdit: boolean = false;
  confessionID:string;
  confessionModel: Confession = new Confession();
  imageBase64: string = "";
  isAnonymous:boolean = false;
  @Input() dialogueTypeNo: number;
  @Input() detailsNavigation: string;
  isLoading = false;
  parameter: Parameter = new Parameter();
  countries:Country[] =[];

  constructor(private activeRoute: ActivatedRoute, private countryService: CountryService, private parameterService:ParameterService, private router: Router, private confessionServiceService:ConfessionServiceService) { }

  ngOnInit() {
    this.GetParam();
    this.activeRoute.params.subscribe(params => {
      this.confessionID = params['id'];
      if (this.confessionID != undefined) {
        this.isEdit = true;
      }

    });
    this.GetCountries();
  }

  GetCountries(){
    this.countryService.GetCountries().subscribe((response: any) => {
    this.countries = response;
    });
  }
  OptionFileChangeEvent(fileInput: any) {

      GenericModel.FileChangeEvent(fileInput);

      setTimeout(() => {
        this.imageBase64 = GenericModel.cardImageBase;
        }, 1000);
  }

  SetAnonymous(val){
    this.isAnonymous = val;
  }

  GetParam(){
    this.parameterService.GetParamsByCode("confession_cost").subscribe((response: any) => {
           this.parameter = response;
          });
  }

  Post(){
    if(ModelClass.isLogged)
    {
        this.confessionModel.image = this.imageBase64;
    this.confessionModel.isAnonymous = this.isAnonymous;
    this.confessionModel.createdBy = ModelClass.user.id;
    this.confessionModel.dialogueTypeNo = this.dialogueTypeNo;

    if (this.confessionModel.title == undefined) {
      Notifier.Notify("Headline not found", "danger", 2000);
    }
    else if (this.confessionModel.details == undefined) {
      Notifier.Notify("Headline discuss not found", "danger", 2000);
    }
    else if (this.confessionModel.image == undefined || this.confessionModel.image == "" ) {
      Notifier.Notify("Attach an image", "danger", 2000);
    }
    else if (this.confessionModel.countryID == undefined || this.confessionModel.countryID == "") {
      Notifier.Notify("Country not found", "danger", 2000);
    }
    else {
      this.isLoading = true;
    this.confessionServiceService.Confess(this.confessionModel).subscribe((response: ResponseMessage) => {
      if (response.statusCode == 200) {
        this.confessionModel = response.data;
        if(this.dialogueTypeNo == 1)
        {
          this.router.navigate(['/search/confession/details', response.data], { replaceUrl: true });
        }
        else  if(this.dialogueTypeNo == 2)
        {
          this.router.navigate(['/search/whistle-blower/details', response.data], { replaceUrl: true });
        }
        else if(this.dialogueTypeNo == 3)
        {
          this.router.navigate(['/search/scammer/details', response.data], { replaceUrl: true });
        }

        Notifier.Notify(response.message, "success", 2000);
      } else {
        Notifier.Notify(response.message, "danger", 2000);
        this.isLoading = false;
      }
    });
     }
    }
    else{
      Notifier.Notify("Log in and try again.", "danger", 2000);
    }

  }

}
