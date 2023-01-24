export class Setting {
  id: string;
  userID: string;

  viewCountryID: string;
  country: string;
  isLocalRange: boolean;

  isAllowMessaging: boolean;
  isRecieveAnoymousMessages: boolean;
  isAnoymousMessaging: boolean;

  isSendNotificationToMail: boolean;
  isReactionNotification: boolean;

  isAllowAccess;
  isShowEmail;
  isShowPhoneNo;

  isActive;
  dateCreated: string;
  dateModified: string;
  createdBy: string;
  modifiedBy: string;
}
