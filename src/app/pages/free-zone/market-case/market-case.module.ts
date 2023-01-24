import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketCaseComponent } from './market-case.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { WalletComponent } from './wallet/wallet.component';
import { Angular4PaystackModule } from 'angular4-paystack';
import { RechargeComponent } from './wallet/components/recharge/recharge.component';
import { SellComponent } from './wallet/components/sell/sell.component';
import { SwapComponent } from './wallet/components/swap/swap.component';
import { TransferComponent } from './wallet/components/transfer/transfer.component';
import { WithdrawComponent } from './wallet/components/withdraw/withdraw.component';
import { BalanceComponent } from './wallet/components/balance/balance.component';
import { ReferralComponent } from './wallet/components/referral/referral.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    Angular4PaystackModule.forRoot('pk_test_06775b09702e93e87c8432dd7df63258ab474681'),
    CommonModule,
    RouterModule,
    ComponentsModule,
    FormsModule
  ],
  declarations: [MarketCaseComponent, MarketPlaceComponent, WalletComponent, RechargeComponent, SellComponent, SwapComponent,
     TransferComponent, WithdrawComponent, BalanceComponent, ReferralComponent]
})
export class MarketCaseModule { }
