import { Component, OnInit, Input } from '@angular/core';
import { Notifier } from 'src/app/models/notifier';
import { WalletService } from 'src/app/service/wallet.service';
import { Wallet } from 'src/app/models/wallet';
import { Transaction } from 'src/app/models/transaction';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { ParameterService } from 'src/app/service/parameter.service';
import { Parameter } from 'src/app/models/parameter';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.scss']
})
export class SwapComponent implements OnInit {

  constructor(private walletService: WalletService, private parameterService: ParameterService) { }
  @Input() wallet: Wallet = new Wallet();
  transferTrans: Transaction = new Transaction();
  amount:number;
  parameter:Parameter = new Parameter();

  rotateOptions = true;

  ngOnInit() {
    this.GetConversion();
  }

  rotateOptionClick(){
    this.rotateOptions = !this.rotateOptions;
  }

  LoadMax(){
    this.transferTrans.amount = this.wallet.gem;
    this.EvaluateSPYConversion();
  }

  GetConversion(){
    this.parameterService.GetParamsByCode("spy_gem_exchange").subscribe((response: any) => {
           this.parameter = response;
          });
  }

  EvaluateGEMConversion(){
    this.transferTrans.amount = this.amount * Number.parseFloat(this.parameter.value);
  }

  EvaluateSPYConversion(){
    this.amount = this.transferTrans.amount/ Number.parseFloat(this.parameter.value);
  }

  Swap(){
    if (this.transferTrans.amount <= 0 || this.transferTrans.amount == undefined) {
      Notifier.Notify("Invalid amount", "danger", 2000);
    }
    else if (this.transferTrans.amount > this.wallet.gem) {
      Notifier.Notify("Insufficient GEM balance", "danger", 2000);
    }
    else{

      this.transferTrans.senderWalletID = this.wallet.id;

      this.walletService.Swap(this.transferTrans).subscribe((response: ResponseMessage) => {
        if (response.statusCode == 200) {
          Notifier.Notify(response.message, "success", 2000);
          this.wallet = response.data;
        }
        else {
           Notifier.Notify(response.message, "danger", 2000);
        }
      });
    }
  }

}
