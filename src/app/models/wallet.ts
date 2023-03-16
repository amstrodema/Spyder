export class Wallet {
    id : string;
    userID  : string;
    userCountryID  : string;
    address : string;
    refCode : string;
    bonus : number = 0;
    spy  : number = 0;
    ref  : number = 0;
    gem  : number = 0;
    busdWallet : string;
    legOneUserID : string;
    legTwoUserID : string;
    activationCost  : number;
    legOnePercentage  : number;
    LegTwoPercentage  : number;
    IsPaidLegOne  : boolean;
    isPaidLegTwo : boolean;
    isLocked : boolean;
    isBanned : boolean;
    isActive : boolean;
    isOfficial : boolean;
    dateCreated : string;
    bonusDeadline : string;
    bankName: string;
    bankAccountNumber: string;
    bankAccountName: string;
}
