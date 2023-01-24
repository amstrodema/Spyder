import { Component, OnInit, Input } from '@angular/core';
import { Wallet } from 'src/app/models/wallet';
import { ParameterService } from 'src/app/service/parameter.service';
import { Parameter } from 'src/app/models/parameter';
import { WalletService } from 'src/app/service/wallet.service';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { Withdrawal } from 'src/app/models/withdrawal';
import { Notifier } from 'src/app/models/notifier';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {

  constructor(private parameterService:ParameterService, private walletService: WalletService) { }
  @Input() wallet: Wallet = new Wallet();
  parameter:Parameter = new Parameter();
  minWithdrawal:number = 0;
  withdrawals: Withdrawal[] = [];
  isDisable = true;

  ngOnInit() {
    this.GetMinWithrawal();
    this.GetWithdrawalsByUserID();
  }
  GetMinWithrawal(){
    this.parameterService.GetParamsByCode("min_withrawal").subscribe((response: any) => {
           this.parameter = response;
           this.minWithdrawal = Number.parseFloat(this.parameter.value);
           this.isDisable =this.DisableWithdrawal();
          });
  }
  GetWithdrawalsByUserID(){
    this.walletService.GetWithdrawalsByUserID().subscribe((response: any) => {
           this.withdrawals = response;
          });
  }
  Withraw(){
    this.walletService.Withdraw().subscribe((response: ResponseMessage) => {
          if (response.statusCode == 200) {
            this.isDisable = true;
            this.withdrawals = response.data;

            Notifier.Notify(response.message, "success", 2000);
          } else {
            Notifier.Notify(response.message, "danger", 2000);
          }
          });
  }
  DisableWithdrawal(){
    if (this.minWithdrawal <= 0) {
      return true;
    }

    if (this.wallet.ref < this.minWithdrawal) {
      return true;
    }

    return false;
  }
}
