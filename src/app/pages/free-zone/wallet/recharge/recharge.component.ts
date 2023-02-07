import { Component, OnInit, Input } from '@angular/core';
import { PaystackOptions } from 'angular4-paystack';
import { ModelClass } from 'src/app/models/modelClass';
import { Wallet } from 'src/app/models/wallet';
import { ParameterService } from 'src/app/service/parameter.service';
import { Parameter } from 'src/app/models/parameter';
import { Notifier } from 'src/app/models/notifier';
import { TrxRef } from 'src/app/models/trxRef';
import { WalletService } from 'src/app/service/wallet.service';
import { Payment } from 'src/app/models/payment';
import { ResponseMessage } from 'src/app/models/responseMessage';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.scss']
})
export class RechargeComponent implements OnInit {
  spyAmount: number = 0;
  MaxAmount: number = 0;
  cost: number = 0;
  modelClass: ModelClass = new ModelClass();
  options: PaystackOptions;
  parameter:Parameter = new Parameter();
  price: number;
  isDisabled = true;
  payment: Payment = new Payment();
  isLoaded = true;

  @Input() wallet: Wallet = new Wallet();

  constructor(private parameterService: ParameterService, private walletService:WalletService) {
   }
  ngOnInit() {
    this.GetSpyNairaExchange();
    this.GetSpyPurchaseDivider();
  }

  ChangeInSpy(){
    this.cost = this.spyAmount * this.price;
    this.Validate();
  }

  ChangeInAmount(){
    this.spyAmount = this.cost * 1.0 / this.price;
    this.Validate();
  }

  Validate(){
    this.cost = Math.floor(this.cost /1);

    if (this.price == 0 ) {
      this.isDisabled = true;
      Notifier.Notify("Try again!", "danger", 2000);
    }
    // else if(this.cost )
    else if (this.spyAmount > this.MaxAmount){
      this.isDisabled = true;
      Notifier.Notify("Purchase exceeds limit", "danger", 2000);
    }
    else{
      this.options = {
        amount: this.cost * 100,
        email: ModelClass.user.email,
        ref: `${Math.ceil(Math.random() * 10e10)}`
      }

      this.isDisabled = false;
    }
  }

  GetSpyNairaExchange(){
    this.parameterService.GetParamsByCode("spy_naira_exchange").subscribe((response: any) => {
           this.parameter = response;
           this.price = Number.parseFloat(this.parameter.value);
          });
  }

  GetSpyPurchaseDivider(){
    this.parameterService.GetParamsByCode("spy_purchase_divider").subscribe((response: any) => {
           let parameter:Parameter = response;
           this.MaxAmount = this.wallet.gem/Number.parseFloat(parameter.value);
          });
  }

  paymentInit() {
    console.log('Payment initialized');
  }
  LoadMax(){
    this.spyAmount = this.MaxAmount;
    this.ChangeInSpy();
  }

  paymentDone(ref: any) {
    console.log('Payment successfull', ref);
    let thisRef: TrxRef = ref;

    this.payment.amount = this.cost;
    this.payment.trxref = this.wallet.id;
    this.payment.reference = thisRef.trxref;
    this.payment.trans = "Account Recharge";
    this.payment.transaction = thisRef.transaction;
    this.payment.status = thisRef.status;
    this.payment.redirecturl = thisRef.redirecturl;
    this.payment.message = thisRef.message;

    this.payment.userID = ModelClass.user.id;

    this.isLoaded = false;

    this.walletService
      .Recharge(this.payment)
      .subscribe((response: ResponseMessage) => {
        if (response.statusCode == 200) {
          Notifier.Notify(response.message, "success", 2000);
          this.isLoaded = true;

          this.wallet = response.data;

          this.GetSpyNairaExchange();
          this.GetSpyPurchaseDivider();

        } else {
          Notifier.Notify(response.message, "danger", 2000);
        }
      });
  }

  paymentCancel() {
    console.log('payment failed');
  }
}
