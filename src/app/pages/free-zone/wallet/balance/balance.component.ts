import { Component, OnInit, Input } from '@angular/core';
import { Wallet } from 'src/app/models/wallet';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  constructor(private walletService: WalletService) { }
  @Input() wallet: Wallet = new Wallet();

  ngOnInit() {

  }
  // GetWalletBalance(){
  //   this.walletService
  //   .GetWalletDetailsByUserID()
  //   .subscribe((response: any) => {
  //    this.wallet = response;
  //   });
  // }
}
