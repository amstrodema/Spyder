import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingComponent } from './trending.component';
import { ConfessionTrendComponent } from './confession-trend/confession-trend.component';
import { MarriageTrendComponent } from './marriage-trend/marriage-trend.component';
import { MissingTrendComponent } from './missing-trend/missing-trend.component';
import { PetitionTrendComponent } from './petition-trend/petition-trend.component';
import { SosTrendComponent } from './sos-trend/sos-trend.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  declarations: [TrendingComponent, ConfessionTrendComponent,MarriageTrendComponent,MissingTrendComponent,
  PetitionTrendComponent, SosTrendComponent]
})
export class TrendingModule { }
