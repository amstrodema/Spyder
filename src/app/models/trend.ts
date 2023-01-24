import { Petition } from "./petition";
import { Marriage } from "./marriage";
import { Death } from "./death";
import { Confession } from "./confession";
import { Missing } from "./missing";
import { HallRecord } from "./hall-record";

export class Trend {
  newRegistration:string;
  earnings:number ;
  referralBonus:number ;
  sosSignals:number ;

  marriedRecord:number ;
  deathRecord:number ;

  missingRecord:number ;
  stolenRecord:number ;
  foundRecord:number ;

  confessionRecord:number ;
  scammersRecord:number ;
  whistleBlowerRecord:number ;

  legendRecord:number ;
  herosRecord:number ;
  fallHeroRecord:number ;
  hosRecord:number ;
  hofRecord:number ;

  petitionVMs:HallRecord[] =[] ;
  marriages:Marriage[] = [] ;
  deaths: Death[] =[] ;
  confessionVMs: Confession[] =[] ;
  missing: Missing[] = [] ;
  stolen: Missing[] = [] ;
}
