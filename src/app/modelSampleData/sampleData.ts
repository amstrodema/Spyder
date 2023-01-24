import { FeatureType, FeatureGroup, Feature } from './../models/missing';
import { Confession } from '../models/confession';
import { Hall } from '../models/hall';
import { HallRecord } from '../models/hall-record';
export class  SampleData {
  // static featureTypes: FeatureType[] =[
  //   {id: '222', featureTypeName: 'IMEI', featureGroupName:'Phone', dateCreated: ''},
  //   {id: '332', featureTypeName: 'Chasis No', featureGroupName:'Vehicle', dateCreated: ''},
  //   {id: '3233', featureTypeName: 'File No', featureGroupName:'Document', dateCreated: ''},
  //   {id: '23e2e', featureTypeName: 'Color', featureGroupName:'General', dateCreated: ''},
  //   {id: '3e2e23', featureTypeName: 'Height', featureGroupName:'General', dateCreated: ''},
  //   {id: '2e2e323e', featureTypeName: 'ProductID', featureGroupName:'Electronics', dateCreated: ''},
  //   {id: '2e2e323e', featureTypeName: 'Age', featureGroupName:'Human', dateCreated: ''},
  //   {id: '2e2e323e', featureTypeName: 'Eyes Color', featureGroupName:'Human', dateCreated: ''},
  //   {id: '2e2e323e', featureTypeName: 'Skin Color', featureGroupName:'Human', dateCreated: ''},
  //   {id: '2e2e323e', featureTypeName: 'Certificate No', featureGroupName:'Marriage', dateCreated: ''},
  //   {id: '2e2e323e', featureTypeName: 'Name of Priest', featureGroupName:'Marriage', dateCreated: ''},
  //   {id: '2e2e323e', featureTypeName: 'Name of Pastor', featureGroupName:'Marriage', dateCreated: ''},
  //   {id: '2e2e323e', featureTypeName: 'Name of Imam', featureGroupName:'Marriage', dateCreated: ''},
  //   {id: '2e2e323e', featureTypeName: 'Name of Convener', featureGroupName:'Marriage', dateCreated: ''},
  //   {id: '2e2e323e', featureTypeName: 'Name of Witness', featureGroupName:'Marriage', dateCreated: ''},
  //   {id: '2e2e323e', featureTypeName: 'Name of Groom Parents', featureGroupName:'Marriage', dateCreated: ''},
  //   {id: '2e2e323e', featureTypeName: 'Name of Bride Parents', featureGroupName:'Marriage', dateCreated: ''},
  //   {id: '2e2e323e', featureTypeName: 'Color for Bride', featureGroupName:'Marriage', dateCreated: ''},
  //   {id: '2e2e323e', featureTypeName: 'Color for Groom', featureGroupName:'Marriage', dateCreated: ''}
  // ];

  // static featureGroups: FeatureGroup[] =[
  //   {id:"fasfas", GroupName:"Phone"},
  //   {id:"safasdf", GroupName:"Vehicle"},
  //   {id:"asfjoi", GroupName:"Document"},
  //   {id:"ajkjoi", GroupName:"Electronics"},
  //   {id:"ajkjoi", GroupName:"Human"}
  // ];

  // static features: Feature[] = [
  //   {id:"", itemID:"",value:"9009-900fkn-90099nff",featureGroup:"Phone", featureType:"IMEI", createdBy:"", dateCreated:""}
  // ];



  // static legendRecords: HallRecord[] = [
  //   {id: "GLB9030031", hallName: "Legend", recordOwnerName:"Michael Jackson", brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.",recordOwnerImage:"assets/images/avatar-3.png", recordOwnerStory: "", isApproved:true, time:"", day:"", petitioner:"", isLike:true,isReact:false,btnBgTypeLike:"",btnBgTypeDisLike:""},
  //   {id: "GLB9030031", hallName: "Legend", recordOwnerName:"Bishop Idahosa", brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.",recordOwnerImage:"assets/images/avatar-4.png", recordOwnerStory: "", isApproved:true, time:"", day:"", petitioner:"", isLike:true,isReact:false,btnBgTypeLike:"",btnBgTypeDisLike:""},
  //   {id: "GLB9030031", hallName: "Legend", recordOwnerName:"Whitney Huston", brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.",recordOwnerImage:"assets/images/avatar-1.png", recordOwnerStory: "", isApproved:true, time:"", day:"", petitioner:"", isLike:true,isReact:true,btnBgTypeLike:"btn-success",btnBgTypeDisLike:""}
  // ];


  // static herosRecords: HallRecord[] = [
  //   {id: "GLB9030031", hallName: "Heros", recordOwnerName:"Michelle Nightingale", brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.",recordOwnerImage:"assets/images/avatar-2.png", recordOwnerStory: "", isApproved:true, time:"", day:"", petitioner:"", isLike:true,isReact:false,btnBgTypeLike:"",btnBgTypeDisLike:""},
  //   {id: "GLB9030031", hallName: "Heros", recordOwnerName:"Dapo Adeojo", brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.",recordOwnerImage:"assets/images/avatar-3.png", recordOwnerStory: "", isApproved:true, time:"", day:"", petitioner:"", isLike:false,isReact:true,btnBgTypeLike:"",btnBgTypeDisLike:"btn-danger"},
  //   {id: "GLB9030031", hallName: "Heros", recordOwnerName:"Mary Slessor", brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.",recordOwnerImage:"assets/images/avatar-4.png", recordOwnerStory: "", isApproved:true, time:"", day:"", petitioner:"", isLike:false,isReact:true,btnBgTypeLike:"",btnBgTypeDisLike:"btn-danger"}
  // ];

  // static fallenHerosRecords: HallRecord[] = [
  //   {id: "GLB9030031", hallName: "Fallen Heros", recordOwnerName:"Nrs Abiodun Adenike", brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.",recordOwnerImage:"assets/images/avatar-4.png", recordOwnerStory: "", isApproved:true, time:"", day:"", petitioner:"", isLike:false,isReact:false,btnBgTypeLike:"",btnBgTypeDisLike:""},
  //   {id: "GLB9030031", hallName: "Fallen Heros", recordOwnerName:"Peterson Joke", brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.",recordOwnerImage:"assets/images/avatar-2.png", recordOwnerStory: "", isApproved:true, time:"", day:"", petitioner:"", isLike:true,isReact:false,btnBgTypeLike:"",btnBgTypeDisLike:""},
  //   {id: "GLB9030031", hallName: "Fallen Heros", recordOwnerName:"Philp Kannon", brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.",recordOwnerImage:"assets/images/avatar-3.png", recordOwnerStory: "", isApproved:true, time:"", day:"", petitioner:"", isLike:false,isReact:true,btnBgTypeLike:"",btnBgTypeDisLike:"btn-danger"}
  // ];

  // static hallOfFameRecords: HallRecord[] = [
  //   {id: "GLB9030031", hallName: "Hall Of Fame", recordOwnerName:"Peter Obi", brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.",recordOwnerImage:"assets/images/avatar-4.png", recordOwnerStory: "", isApproved:true, time:"", day:"", petitioner:"", isLike:true,isReact:false,btnBgTypeLike:"",btnBgTypeDisLike:""},
  //   {id: "GLB9030031", hallName: "Hall Of Fame", recordOwnerName:"Nnamdi Kanu", brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.",recordOwnerImage:"assets/images/avatar-1.png", recordOwnerStory: "", isApproved:true, time:"", day:"", petitioner:"", isLike:false,isReact:false,btnBgTypeLike:"",btnBgTypeDisLike:""},
  //   {id: "GLB9030031", hallName: "Hall Of Fame", recordOwnerName:"Tope Oyedepo", brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.",recordOwnerImage:"assets/images/avatar-2.png", recordOwnerStory: "", isApproved:true, time:"", day:"", petitioner:"", isLike:false,isReact:true,btnBgTypeLike:"",btnBgTypeDisLike:"btn-danger"}
  // ];

  // static hallOfShameRecords: HallRecord[] = [
  //   {id: "GLB9030031", hallName: "Hall Of Shame", recordOwnerName:"Muhammed Buhari", brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.",recordOwnerImage:"assets/images/avatar-3.png", recordOwnerStory: "", isApproved:true, time:"", day:"", petitioner:"", isLike:false,isReact:true,btnBgTypeLike:"",btnBgTypeDisLike:"btn-danger"},
  //   {id: "GLB9030031", hallName: "Hall Of Shame", recordOwnerName:"Atiku Abubakar", brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.",recordOwnerImage:"assets/images/avatar-1.png", recordOwnerStory: "", isApproved:true, time:"", day:"", petitioner:"", isLike:true,isReact:false,btnBgTypeLike:"",btnBgTypeDisLike:""},
  //   {id: "GLB9030031", hallName: "Hall Of Shame", recordOwnerName:"Segun Oni", brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.",recordOwnerImage:"assets/images/avatar-2.png", recordOwnerStory: "", isApproved:true, time:"", day:"", petitioner:"", isLike:false,isReact:false,btnBgTypeLike:"",btnBgTypeDisLike:""}
  // ];

  // static halls: Hall[] = [
  //   {id:"",hallName:"", className: "", clickObject: "", iconName: "", hallCode: ""},
  //   {id:"",hallName:"", className: "", clickObject: "", iconName: "", hallCode: ""},
  //   {id:"",hallName:"", className: "", clickObject: "", iconName: "", hallCode: ""}
  // ];
}
