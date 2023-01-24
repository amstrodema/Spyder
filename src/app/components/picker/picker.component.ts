import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
export class PickerComponent implements OnInit {
  @Input() title: string;
  @Input() data: any[] = [];
  @Input()resData: any[] = [];
  @Input()flag: number = 0;
  @Input()disabled: number = 0;
  res: any[] = [];
  pre= ""

  constructor(private activeModal:NgbActiveModal) { }

  ngOnInit() {
    for (const key in this.resData) {
      if (this.resData.hasOwnProperty(key)) {
        if (this.flag == 1) {
          this.res.push(this.resData[key].candidateID);
        } else if (this.flag == 2 || this.flag == 4){
          this.res.push(this.resData[key].groupID);
        } else if (this.flag == 3){
          this.res.push(this.resData[key].instructorID);
        }

      }
    }
  this.pre = this.title;
  this.title = this.pre+ " ("+this.res.length+" selected)";
  }


  close() {
    this.activeModal.dismiss();
  }
  save() {
    this.activeModal.close(this.res);
  }

  SolveSelection(index: number){
    let val = this.data[index].id;

    if (this.res.includes(val)) {
      return true;
    }

    return false;
  }

  selectionPicker(index: number){
    let val = this.data[index].id;
  try {
    //var x = this.resData.find(v => v.candidateID == val.id);
  //  var i = this.resData.findIndex(v => v.candidateID == val.id);
//alert(i);
    if (!this.res.includes(val)) {
      this.res.push(val);
    }
    else{
      this.res.splice(this.res.indexOf(val), 1);
    }

    this.title = this.pre+ " ("+this.res.length+" selected)";

  } catch (error) {
  }
  }

  ResolveName(val:string){
    try {
      return this.data.find(x=> x.id == val).name;
    } catch (error) {

    }
  }
}
