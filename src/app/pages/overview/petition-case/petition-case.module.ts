import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetitionCaseComponent } from './petition-case.component';
import { PetitionViewComponent } from './petition-view/petition-view.component';
import { PetitionComponent } from './petition/petition.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';
import { AdsModule } from 'src/app/components/ads/ads.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    FormsModule,
    AdsModule
  ],
  declarations: [PetitionCaseComponent, PetitionViewComponent, PetitionComponent]
})
export class PetitionCaseModule { }
