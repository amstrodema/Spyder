import { DynamicScriptLoaderService } from "../service/dynamicScriptLoader.service";


export class ScriptLoader {

  public static loadScripts(){
    let  dynamicScriptLoaderService: DynamicScriptLoaderService = new DynamicScriptLoaderService();
      dynamicScriptLoaderService.load('navbar').then(data =>{

      }).catch(error => console.log("New Error: "+error)
      );
  }

  public static loadLightboxScripts(){
  let  dynamicScriptLoaderService: DynamicScriptLoaderService = new DynamicScriptLoaderService();
    dynamicScriptLoaderService.load('lightbox', 'lightbox2', 'lighthouse').then(data =>{

    }).catch(error => console.log("New Error From Script Loader: "+error)
    );
  }


  public static loadMenuScripts(){
    let  dynamicScriptLoaderService: DynamicScriptLoaderService = new DynamicScriptLoaderService();
      dynamicScriptLoaderService.load('menu').then(data =>{

      }).catch(error => console.log("New Error From Script Loader: "+error)
      );
    }

 public static loadmaxlength(){
    let  dynamicScriptLoaderService: DynamicScriptLoaderService = new DynamicScriptLoaderService();
      dynamicScriptLoaderService.load('maxlength', 'select2', 'locales', 'waves', 'advance', 'slimscroll').then(data =>{

      }).catch(error => console.log("New Error: "+error)
      );
   }

}
