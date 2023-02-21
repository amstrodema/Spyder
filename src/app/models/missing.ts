export class Missing {
  id: string;
  itemTypeID: string;
  title: string;
  desc: string;
  fullInfo: string;
  state: string;
  city: string;
  postalCode: string;
  lastSeen: string;
  date: string;
  image:string;
  image2:string;
  image3:string;
  videoLink: string;
  videoLink2: string;
  videoLink3: string;
  createdBy: string;
  creatorID: string;
  countryID: string;
  awarenessTypeNo: number;
  time: string;
  day: string;
  update: string;
  updateTime: string;
  updateDay: string;

  itemTypeName: string;
  country: string;

}
export class Feature{
  id:string;
  itemID: string;
  value: string;
  featureType: string;
  featureGroup: string;
  featureTypeID: string;
  featureGroupID: string;
  createdBy: string;
  dateCreated: string;
  countryID: string;
}
export class FeatureType{
  id:string;
  featureGroupID:string;
  name:string;
  desc: string;
  code: string;
  dateCreated: string;
}
export class FeatureGroup{
  id: string;
  name: string;
  code:string;
}
export class FeatureVM{
  featureGroup:string;
  value:string;
  featureType:string
}
