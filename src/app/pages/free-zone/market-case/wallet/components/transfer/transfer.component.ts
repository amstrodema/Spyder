import { Component, OnInit, Input } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { Notifier } from 'src/app/models/notifier';
import { Wallet } from 'src/app/models/wallet';
import { Transaction } from 'src/app/models/transaction';
import { WalletService } from 'src/app/service/wallet.service';
import { ResponseMessage } from 'src/app/models/responseMessage';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  constructor(private clipBoard:ClipboardService, private walletService: WalletService) { }
  isSpyID: boolean= true;
  isSendSpyID: boolean= true;
  @Input() wallet: Wallet = new Wallet();
transferTrans: Transaction = new Transaction();

  ngOnInit() {
  }

  toggleIsSendSpyID(){
    this.isSendSpyID = !this.isSendSpyID;
    if (this.isSendSpyID) {
      this.transferTrans.walletAddress = "";
    } else {
      this.transferTrans.receiverRefCode = "";
    }
  }
  CopyID(val){
    this.clipBoard.copyFromContent(val);
    Notifier.Notify("SPY ID copied!", "success", 2000);
  }

  CopyLink(val){
    this.clipBoard.copyFromContent(val);
    Notifier.Notify("SPY Link copied!", "success", 2000);
  }

  Transfer(){
    if (this.transferTrans.amount <= 0 || this.transferTrans.amount == undefined) {
      Notifier.Notify("Invalid amount", "danger", 2000);
    } else if (!this.isSendSpyID && (this.transferTrans.receiverRefCode == undefined || this.transferTrans.receiverRefCode == '')) {
      Notifier.Notify("Invalid SPY link", "danger", 2000);
    }
    else if (this.isSendSpyID && (this.transferTrans.walletAddress == undefined || this.transferTrans.walletAddress == '')) {
      Notifier.Notify("Invalid SPY address", "danger", 2000);
    }
    else if (this.transferTrans.amount > this.wallet.spy) {
      Notifier.Notify("Insufficient balance", "danger", 2000);
    }
    else{

      this.transferTrans.senderID = this.wallet.userID;

      this.walletService.Transfer(this.transferTrans).subscribe((response: ResponseMessage) => {
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
