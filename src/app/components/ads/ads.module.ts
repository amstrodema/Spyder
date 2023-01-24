import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsComponent } from './ads.component';
import { TopAndSuggestedPetitionsComponent } from './topAndSuggestedPetitions/topAndSuggestedPetitions.component';
import { Ads1Component } from './ads1/ads1.component';
import { SideAdvComponent } from './sideAdv/sideAdv.component';
import { FloorAdsComponent } from './floorAds/floorAds.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdsComponent, TopAndSuggestedPetitionsComponent, Ads1Component, SideAdvComponent, FloorAdsComponent],
  exports: [TopAndSuggestedPetitionsComponent, Ads1Component, SideAdvComponent, FloorAdsComponent]
})
export class AdsModule {}
