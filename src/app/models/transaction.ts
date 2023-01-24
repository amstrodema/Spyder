export class Transaction {
    id: string;
    countryID  : string;
    senderID  : string;
    receiverID  : string;
    senderWalletID  : string;
    receiverWalletID  : string;
    transactionType  : string;
    senderRefCode  : string;
    receiverRefCode  : string;
    walletAddress  : string;
    networkFee  : number;
    isConfirmed  : boolean;
    amount   : number;
    initiatorBUSDAddress  : string;
    recieverBUSDAddress  : string;
    busdTransactionHash  : string;
    transactionDesc  : string;
    transactionCurrency  : string;
    isOfficial   : boolean;
    isActive   : boolean;
    dateCreated : string;
}
