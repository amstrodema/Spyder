export class Vote {
  btnBgTypeDisLike: string;
  btnBgTypeLike: string;
  isLike:boolean;
  isReact:boolean;
  userID: string;
  userCountryID: string;
  itemID: string;
  createdBy: string;
}
export class VoteVM{
 totalUpVote:number;
 totalDownVote:number;
 votePercentage: number;
}
