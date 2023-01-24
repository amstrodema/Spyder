import { NotificationVM } from "./notificationVM";

export class NotificationHybrid {
  notificationVMs: NotificationVM [];
  unReadInbox: number = 0;
  unReadNotification: number = 0;
}
