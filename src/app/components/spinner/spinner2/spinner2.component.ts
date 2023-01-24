import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/service/loader.service';

@Component({
  selector: 'app-spinner2',
  templateUrl: './spinner2.component.html',
  styleUrls: ['./spinner2.component.scss']
})
export class Spinner2Component implements OnInit {
  constructor(private loaderService:LoaderService) { }

  isLoading: Subject<boolean> = this.loaderService.isLoading;
  ngOnInit() {
  }

}
