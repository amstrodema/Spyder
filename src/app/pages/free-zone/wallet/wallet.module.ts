import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { RechargeComponent } from './recharge/recharge.component';
import { SellComponent } from './sell/sell.component';
import { SwapComponent } from './swap/swap.component';
import { ReferralComponent } from './referral/referral.component';
import { BalanceComponent } from './balance/balance.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransferComponent } from './transfer/transfer.component';
import { Angular4PaystackModule } from 'angular4-paystack';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    Angular4PaystackModule.forRoot('pk_test_06775b09702e93e87c8432dd7df63258ab474681'),
    ComponentsModule, RouterModule,
    FormsModule
  ],
  declarations: [WalletComponent, RechargeComponent, SellComponent, SwapComponent,
    TransferComponent, WithdrawComponent, BalanceComponent, ReferralComponent]
})
export class WalletModule { }
