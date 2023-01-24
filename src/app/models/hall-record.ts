export class HallRecord {
  id:string;
  hallName: string;
  hallID: string;
  recordOwnerName: string;
  brief: string;
  recordOwnerStory: string;
  time: string;
  day: string;
  petitioner: string;
  petitionerID: string;
  petitionCountryID: string;
  recordOwnerImage: string;
  isReact:boolean;
  isLike:boolean;
  btnBgTypeLike: string = "";
  btnBgTypeDisLike: string = "";
  isApproved: boolean;
  totalUpVotes: number;
  totalDownVotes: number;
  votePercentage:number;
  clickObject: string;
  isAnonymous:boolean;
}
