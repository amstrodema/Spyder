import { Component, OnInit } from '@angular/core';
import { Notifier } from 'src/app/models/notifier';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { ModelClass } from 'src/app/models/modelClass';
import { TrxRef } from 'src/app/models/trxRef';
import { Router } from '@angular/router';
import { WalletService } from 'src/app/service/wallet.service';
import { Wallet } from 'src/app/models/wallet';
import { Payment } from 'src/app/models/payment';
import { PaystackOptions } from 'angular4-paystack';
import { Registration } from 'src/app/models/registration';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  withdrawal: boolean = false;
  transfer: boolean = false;
  recharge: boolean = false;
  swap: boolean = false;
  sell: boolean = false;
  history: boolean = false;
  referral: boolean = false;
  balance: boolean = true;
  isActivated: boolean = false;
  isLoaded = true;
  isWalletLoaded = false;
  user: Registration;
  isHide = false;
  trx: string;

  withdrawalBtn = "";
  transferBtn = "";
  rechargeBtn = "";
  swapBtn = "";
  sellBtn = "";
  historyBtn = "";
  referralBtn = "";
  balanceBtn = "btn-primary";

  activateOptions: PaystackOptions;
  payment: Payment = new Payment();
  wallet: Wallet;
  amount = 0;

  constructor(private router: Router, private walletService: WalletService) {
    if (!ModelClass.isLogged) {
      this.router.navigate(["/login"]);
      Notifier.Notify("Log in and try again.", "danger", 2000);
    }
    else{
      try {
        this.user =  ModelClass.user;
        this.isHide = ModelClass.user.isActivated;
      } catch (error) {

      }
    }
  }

  ngOnInit() {
    this.GetWallet();
  }

  GetWallet() {
    this.walletService
      .GetWalletDetailsByUserID()
      .subscribe((response: ResponseMessage) => {
        if (response.statusCode == 200) {
          this.wallet = response.data;
          this.isWalletLoaded = true;

          try {
            this.isActivated = ModelClass.user.isActivated;
            this.activateOptions = {
              amount: this.wallet.activationCost * 100,
              email: ModelClass.user.email,
              ref: `${Math.ceil(Math.random() * 10e10)}`
            };
          } catch (error) {}
        } else {
          Notifier.Notify(response.message, "danger", 2000);
        }
      });
  }

  //Activation Payment

  ActivationPaymentInit() {
    this.isLoaded = false;
  }

  ActivationPaymentDone(ref: any) {
    //ActivateAccount
    let thisRef: TrxRef = ref;

    this.payment.amount = this.wallet.activationCost;
    this.payment.trxref = this.wallet.id;
    this.payment.reference = thisRef.trxref;
    this.payment.trans = "Account activation";
    this.payment.transaction = thisRef.transaction;
    this.payment.status = thisRef.status;
    this.payment.redirecturl = thisRef.redirecturl;
    this.payment.message = thisRef.message;

    this.payment.userID = ModelClass.user.id;
    this.trx = this.payment.transaction;

    this.walletService
      .ActivateAccount(this.payment)
      .subscribe((response: ResponseMessage) => {
        if (response.statusCode == 200) {
          Notifier.Notify(response.message, "success", 2000);
          this.isLoaded = true;

          ModelClass.user.isActivated = this.isHide = true;
          sessionStorage.setItem("User", JSON.stringify(ModelClass.user));
          ModelClass.CheckLoggedIn();
        } else {
          Notifier.Notify(response.message, "danger", 2000);
        }
      });
  }

  ActivationPaymentCancel() {
    this.isLoaded = true;
  }

  RechargeClick() {
    this.disableAll();
    this.wipeBtn();
    this.rechargeBtn = "btn-primary";
    this.recharge = true;
  }
  SwapClick() {
    this.disableAll();
    this.wipeBtn();
    this.swapBtn = "btn-primary";
    this.swap = true;
  }

  TransferClick() {
    this.disableAll();
    this.wipeBtn();
    this.transferBtn = "btn-primary";
    this.transfer = true;
  }

  SellClick() {
    this.disableAll();
    this.wipeBtn();
    this.sellBtn = "btn-primary";
    this.sell = true;
  }

  WithdrawalClick() {
    this.disableAll();
    this.wipeBtn();
    this.withdrawalBtn = "btn-primary";
    this.withdrawal = true;
  }

  BalanceClick() {
    this.disableAll();
    this.wipeBtn();
    this.balanceBtn = "btn-primary";
    this.balance = true;
    this.GetWallet();
  }

  ReferralClick() {
    this.disableAll();
    this.wipeBtn();
    this.referralBtn = "btn-primary";
    this.referral = true;
  }

  HistoryClick() {
    this.disableAll();
    this.wipeBtn();
    this.historyBtn = "btn-primary";
    this.history = true;
  }

  disableAll() {
    this.withdrawal = false;
    this.transfer = false;
    this.recharge = false;
    this.sell = false;
    this.swap = false;
    this.balance = false;
    this.history = false;
    this.referral = false;
  }

  wipeBtn() {
    this.withdrawalBtn = "";
    this.transferBtn = "";
    this.rechargeBtn = "";
    this.swapBtn = "";
    this.sellBtn = "";
    this.balanceBtn = "";
    this.historyBtn = "";
    this.referralBtn = "";
  }
}
