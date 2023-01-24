import { Component, OnInit, Input } from '@angular/core';
import { GenericModel } from 'src/app/models/genericModel';
import { Router } from '@angular/router';
import { DeathService } from 'src/app/service/death.service';
import { Death } from 'src/app/models/death';

@Component({
  selector: 'app-death-grid-comp',
  templateUrl: './death-grid-comp.component.html',
  styleUrls: ['./death-grid-comp.component.scss']
})
export class DeathGridCompComponent implements OnInit {
  genericModel: GenericModel = new GenericModel();
  btnBgTypeLike= "";
  btnBgTypeDisLike= "";
  @Input() route: string;
  @Input() deathRecords:Death[] = [];
  constructor(private router:Router, private deathService:DeathService) { }

  ngOnInit() {
  }
  DeathRecordDetails(id:string){
    this.router.navigate(['/search/death-register/details', id]);
  }
}
