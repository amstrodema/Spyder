import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ModelClass } from '../models/modelClass';
import { Transaction } from '../models/transaction';
import { Payment } from '../models/payment';
import { RequestObject } from '../models/requestObject';
import { Wallet } from '../models/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  GetWalletDetailsByUserID(): Observable<any> {
  return this.httpClient.get(ModelClass.baseUrl+`api/wallet/GetWalletDetailsByUserID?userid=`+ ModelClass.user.id+"&appID="+ModelClass.clientSystem.appID);
}

GetReferalWallets(): Observable<any> {
  return this.httpClient.get(ModelClass.baseUrl+`api/wallet/GetReferalWallets?userid=`+ ModelClass.user.id+"&appID="+ModelClass.clientSystem.appID);
}

constructor(private httpClient: HttpClient) { }
ActivateAccount(payment:Payment): Observable<any> {

  let requestObj:RequestObject = ModelClass.GetRequestObject();
  requestObj.data = payment;
  requestObj.appID = ModelClass.clientSystem.appID;

  return this.httpClient.post(ModelClass.baseUrl+`api/user/activateaccount`, requestObj);
}

Transfer(transaction: Transaction): Observable<any> {

  let requestObj:RequestObject = ModelClass.GetRequestObject();
  requestObj.data = transaction;
  requestObj.appID = ModelClass.clientSystem.appID;

  return this.httpClient.post(ModelClass.baseUrl+`api/wallet/transfer`, requestObj);
}

Swap(transaction: Transaction): Observable<any> {

  let requestObj:RequestObject = ModelClass.GetRequestObject();
  requestObj.data = transaction;
  requestObj.appID = ModelClass.clientSystem.appID;

  return this.httpClient.post(ModelClass.baseUrl+`api/wallet/swap`, requestObj);
}

Recharge(payment: Payment): Observable<any> {

  let requestObj:RequestObject = ModelClass.GetRequestObject();
  requestObj.data = payment;
  requestObj.appID = ModelClass.clientSystem.appID;

  return this.httpClient.post(ModelClass.baseUrl+`api/wallet/recharge`, requestObj);
}

Withdraw(): Observable<any> {
  return this.httpClient.get(ModelClass.baseUrl+`api/withdrawal/withdraw?userid=`+ ModelClass.user.id+"&appID="+ModelClass.clientSystem.appID);
}

GetWithdrawalsByUserID(): Observable<any> {
  return this.httpClient.get(ModelClass.baseUrl+`api/withdrawal/GetWithdrawalsByUserID?userid=`+ ModelClass.user.id+"&appID="+ModelClass.clientSystem.appID);
}

UpdateDetails(wallet:Wallet, password: string): Observable<any> {
  let requestObj:RequestObject = ModelClass.GetRequestObject();
  requestObj.data = wallet;
  requestObj.itemID = password;

  return this.httpClient.post(ModelClass.baseUrl+`api/wallet/updatedetails`,requestObj);
}
}
