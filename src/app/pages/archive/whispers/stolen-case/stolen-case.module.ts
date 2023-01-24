import { ComponentsModule } from './../../../../components/components.module';
import { RouterModule } from '@angular/router';
import { NewStolenComponent } from './new-stolen/new-stolen.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StolenCaseComponent } from './stolen-case.component';
import { StolenComponent } from './stolen/stolen.component';
import { StolenDetailsComponent } from './stolen-details/stolen-details.component';
import { FormsModule } from '@angular/forms';
import { AwarenessCaseModule } from 'src/app/component-mod/awareness-case/awareness-case.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AwarenessCaseModule
  ],
  declarations: [StolenCaseComponent, StolenComponent, NewStolenComponent, StolenDetailsComponent]
})
export class StolenCaseModule { }
