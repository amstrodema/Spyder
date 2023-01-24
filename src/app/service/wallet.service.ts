import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ModelClass } from '../models/modelClass';
import { Transaction } from '../models/transaction';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  GetWalletDetailsByUserID(): Observable<any> {
  return this.httpClient.get(ModelClass.baseUrl+`api/wallet/GetWalletDetailsByUserID?userid=`+ ModelClass.user.id);
}

GetReferalWallets(): Observable<any> {
  return this.httpClient.get(ModelClass.baseUrl+`api/wallet/GetReferalWallets?userid=`+ ModelClass.user.id);
}

constructor(private httpClient: HttpClient) { }
ActivateAccount(payment:Payment): Observable<any> {
  return this.httpClient.post(ModelClass.baseUrl+`api/user/activateaccount`, payment);
}

Transfer(transaction: Transaction): Observable<any> {
  return this.httpClient.post(ModelClass.baseUrl+`api/wallet/transfer`, transaction);
}

Swap(transaction: Transaction): Observable<any> {
  return this.httpClient.post(ModelClass.baseUrl+`api/wallet/swap`, transaction);
}

Recharge(payment: Payment): Observable<any> {
  return this.httpClient.post(ModelClass.baseUrl+`api/wallet/recharge`, payment);
}

Withdraw(): Observable<any> {
  return this.httpClient.get(ModelClass.baseUrl+`api/withdrawal/withdraw?userid=`+ ModelClass.user.id);
}

GetWithdrawalsByUserID(): Observable<any> {
  return this.httpClient.get(ModelClass.baseUrl+`api/withdrawal/GetWithdrawalsByUserID?userid=`+ ModelClass.user.id);
}
}
