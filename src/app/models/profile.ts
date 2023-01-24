import { Registration } from "./registration";
import { Vote, VoteVM } from "./vote";
import { Comment } from "./comment";

export class Profile {
  id: string;
  type: string;
  title:string;
  body: string;
  likes:string;
  dislikes:string;
  date:string;

  user:Registration;
  comment: Comment;
  comments: number;
  voteType: boolean;
}
