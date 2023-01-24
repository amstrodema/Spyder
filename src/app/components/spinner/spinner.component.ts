import { Component, OnInit } from '@angular/core';
import { ModelClass } from 'src/app/models/modelClass';
import { LoaderService } from 'src/app/service/loader.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor(private loaderService:LoaderService) { }

  isLoading: Subject<boolean> = this.loaderService.isLoading;

  ngOnInit() {

  }

}
