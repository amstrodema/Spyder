import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { ModelClass } from 'src/app/models/modelClass';
import { CommentService } from 'src/app/service/comment.service';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { Notifier } from 'src/app/models/notifier';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {
  @Input() route;
  @Input() itemID: string;
  @Input() authorID: string;
  comments:Comment[] =[];
  comment: Comment = new Comment();
  constructor(private commentService:CommentService) { }

  ngOnInit() {
    this.GetComment();
  }

  GetComment(){
    this.commentService.GetCommentVMsByItemID(this.itemID).subscribe((response: any) => {
        // if (response.statusCode == 200) {
        //   this.comments = response.data;
        // } else {
        //   Notifier.Notify(response.message, "danger", 2000);
        // }
        this.comments = response;
    });
  }

  PostComment(){
    if(this.comment.details == null || this.comment.details == undefined || this.comment.details == ""){
      Notifier.Notify("Comment is empty", "danger", 2000);
    }
    else if (ModelClass.isLogged) {

    this.comment.userID = ModelClass.user.id;
    this.comment.itemID = this.itemID;

    if(this.comment.details == ""){ Notifier.Notify("Empty comment", "danger", 2000);}
    else{
     this.commentService.Comment(this.comment, this.authorID).subscribe((response: ResponseMessage) => {
       if (response.statusCode == 200) {
         Notifier.Notify(response.message, "success", 2000);
         this.comments = response.data;
         this.comment.details = "";
       } else {
         Notifier.Notify(response.message, "danger", 2000);
       }
     });
    }

    } else {
       Notifier.Notify("Log in and try again.", "danger", 2000);
    }

  }

}
