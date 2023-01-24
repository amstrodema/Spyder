import { Component, OnInit, Input } from '@angular/core';
import { Confession } from 'src/app/models/confession';
import { Router } from '@angular/router';
import { ConfessionServiceService } from 'src/app/service/confessionService.service';

@Component({
  selector: 'app-dialogue-case',
  templateUrl: './dialogue-case.component.html',
  styleUrls: ['./dialogue-case.component.scss']
})
export class DialogueCaseComponent implements OnInit  {
  toggleSearchFilterIndicator: boolean = false;
  confessions: Confession[] = [];
  @Input() dialogueTypeNo: number;
  @Input() target: string;
  searchString: string = "";
  
  arrowButton = "icofont-long-arrow-up"

  isLoaded = false;

  constructor(private router:Router, private confessionServiceService:ConfessionServiceService) { }

  ngOnInit() {
    this.GetData();
  }

  SearchFilter(){
   // this.confessions.
  }

  toggleSearchFilter(val){
    this.toggleSearchFilterIndicator = val;

  }
  toggleArrow(){
    if (this.arrowButton == "icofont-long-arrow-up") {
      this.arrowButton = "icofont-long-arrow-down";
    } else {
      this.arrowButton = "icofont-long-arrow-up"
    }

    this.confessions = this.confessions.reverse();
  }

  GetData(){
    this.confessionServiceService.GetConfessionHeadLines(this.dialogueTypeNo).subscribe((response: any) => {
      this.confessions = response;
      this.isLoaded = true;
    });
  }



  Details(id){
    this.router.navigate([this.target, id]);
  }

  OpenProfile(){

  }

}
