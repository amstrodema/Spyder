import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WantedCaseComponent } from './wanted-case.component';
import { NewWantedComponent } from './new-wanted/new-wanted.component';
import { WantedDetailsComponent } from './wanted-details/wanted-details.component';
import { WantedComponent } from './wanted/wanted.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [WantedCaseComponent, NewWantedComponent, WantedDetailsComponent, WantedComponent]
})
export class WantedCaseModule { }
