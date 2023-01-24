import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/service/notification.service';
import { ModelClass } from 'src/app/models/modelClass';
import { Router } from '@angular/router';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { Notifier } from 'src/app/models/notifier';
import { NotificationVM } from 'src/app/models/notificationVM';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notifications:NotificationVM [] = [];
  isLoaded = false;
  constructor(private notificationService: NotificationService, private router: Router) { }

  ngOnInit() {
    if (!ModelClass.isLogged) {
      this.router.navigate(["/search"]);
      Notifier.Notify("Log in and try again!", "danger", 2000);
    }
    else{
      this.GetAllNotificationByRecieverID();
    }
  }
  GetAllNotificationByRecieverID(){
    this.notificationService.GetAllNotificationByRecieverID().subscribe((response: ResponseMessage) => {
      this.isLoaded = true;
      if (response.statusCode == 200) {
        this.notifications = response.data;
      }
      else {
         Notifier.Notify(response.message, "danger", 2000);
      }
      ModelClass.notificationHybrid.unReadNotification =0;
    });
  }
}
