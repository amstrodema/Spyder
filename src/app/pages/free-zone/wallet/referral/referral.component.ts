import { Component, OnInit, Input } from '@angular/core';
import { WalletService } from 'src/app/service/wallet.service';
import { Wallet } from 'src/app/models/wallet';
import { ClipboardService } from 'ngx-clipboard';
import { Notifier } from 'src/app/models/notifier';
import { ModelClass } from 'src/app/models/modelClass';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.scss']
})
export class ReferralComponent implements OnInit {
  referrals: Wallet [] = [];
  totalSecondLeg = 0;
  @Input() wallet: Wallet = new Wallet();
  baseUrl2 = ModelClass.baseUrl2;
  constructor(private walletService:WalletService, private clipBoard:ClipboardService) { }

  ngOnInit() {
    this.GetReferral();
  }

  GetReferral(){
    this.walletService.GetReferalWallets().subscribe((response: any) => {
      this.referrals = response;

      this.referrals.forEach(referral => {
        this.totalSecondLeg += referral.ref;
      });
    });
  }

  CopyLink(){
    this.clipBoard.copyFromContent(this.baseUrl2+"register/"+this.wallet.refCode);
    Notifier.Notify("Referral link copied!", "success", 2000);
  }

  Parapharase(val){
    if (val == true) {
      return "Activated"
    } else {
      return "Not Activated"
    }
  }
}
