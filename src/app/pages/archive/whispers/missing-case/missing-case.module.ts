import { ComponentsModule } from './../../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissingCaseComponent } from './missing-case.component';
import { MissingComponent } from './missing/missing.component';
import { NewMissingComponent } from './new-missing/new-missing.component';
import { MissingDetailsComponent } from './missing-details/missing-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AwarenessCaseModule } from 'src/app/component-mod/awareness-case/awareness-case.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AwarenessCaseModule
  ],
  declarations: [MissingCaseComponent, MissingComponent, NewMissingComponent, MissingDetailsComponent]
})
export class MissingCaseModule { }
