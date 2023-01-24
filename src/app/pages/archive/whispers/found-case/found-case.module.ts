import { NewFoundComponent } from './new-found/new-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoundCaseComponent } from './found-case.component';
import { FoundDetailsComponent } from './found-details/found-details.component';
import { AwarenessCaseModule } from 'src/app/component-mod/awareness-case/awareness-case.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AwarenessCaseModule,
    RouterModule,
    FormsModule
  ],
  declarations: [FoundCaseComponent, FoundDetailsComponent, NewFoundComponent]
})
export class FoundCaseModule { }
