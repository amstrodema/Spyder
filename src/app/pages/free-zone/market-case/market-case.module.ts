import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketCaseComponent } from './market-case.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { Angular4PaystackModule } from 'angular4-paystack';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    FormsModule
  ],
  declarations: [MarketCaseComponent, MarketPlaceComponent]
})
export class MarketCaseModule { }
