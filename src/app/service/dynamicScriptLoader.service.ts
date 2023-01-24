import { Injectable } from '@angular/core';

interface Scripts{
  name: string;
  src: string
}

export const ScriptStore: Scripts[] = [
  {name: 'lighthouse', src: 'assets/js/lighthouse.js'},
  {name: 'main', src: 'assets/js/main.min.js'},
  {name: 'navbar', src: 'assets/js/navbar.js'},
  {name: 'notification', src: 'assets/plugins/notification/js/bootstrap-growl.min.js'},
  {name: 'sparkline', src: 'assets/plugins/jquery-sparkline/dist/jquery.sparkline.js'},
  {name: 'waypoints', src: 'assets/plugins/waypoints/jquery.waypoints.min.js'},
  {name: 'countdown', src: 'assets/plugins/countdown/js/jquery.counterup.js'},
  {name: 'echarts', src: 'assets/plugins/charts/echarts/js/echarts-all.js'},
  {name: 'waves', src: 'assets/plugins/Waves/waves.min.js'},
  {name: 'dashboard', src: 'assets/pages/dashboard.js'},
  {name: 'elements', src: 'assets/pages/elements.js'},
  {name: 'menu', src: 'assets/js/menu.min.js'},
  {name: 'classie', src: 'assets/plugins/classie/classie.js'},
  {name: 'nicescroll', src: 'assets/plugins/jquery.nicescroll/jquery.nicescroll.min.js'},
  {name: 'slimscroll', src: 'assets/plugins/jquery-slimscroll/jquery.slimscroll.js'},
  {name: 'jquery-ui', src: 'assets/plugins/jquery-ui/jquery-ui.min.js'},
  {name: 'jquery', src: 'assets/plugins/Jquery/dist/jquery.min.js'},
  {name: 'tether', src: 'assets/plugins/tether/dist/js/tether.min.js'},
  {name: 'bootstrap', src: 'assets/plugins/bootstrap/js/bootstrap.min.js'},
  {name: 'lightbox', src: 'assets/plugins/lightbox2/dist/js/lightbox.js'},
  {name: 'lightbox2', src: 'assets/plugins/light-box/js/ekko-lightbox.js'},
  {name: 'maxlength', src: 'assets/plugins/bootstrap-maxlength/src/bootstrap-maxlength.js'},
  {name: 'select2', src: 'assets/plugins/select2/dist/js/select2.full.min.js'},
  {name: 'locales', src: 'assets/plugins/datepicker/js/moment-with-locales.min.js'},
  {name: 'advance', src: 'assets/pages/advance-form.js'}
];
declare var document: any;

@Injectable({
  providedIn: 'root'
})
export class DynamicScriptLoaderService {
private scripts:any = {};

constructor() {
  ScriptStore.forEach((script: any) => {
    this.scripts[script.name] = {
      loaded: false,
      src: script.src
    };
  });
}

load(...scripts: string[]) {
  const promises: any[] = [];
  scripts.forEach((script) => promises.push(this.loadScript(script)));
  return Promise.all(promises);
}

loadScript(name: string) {
  return new Promise((resolve, reject) => {
    if (!this.scripts[name].loaded) {
      //load script
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = this.scripts[name].src;
      if (script.readyState) {  //IE
          script.onreadystatechange = () => {
              if (script.readyState === "loaded" || script.readyState === "complete") {
                  script.onreadystatechange = null;
                  this.scripts[name].loaded = true;
                  resolve({script: name, loaded: true, status: 'Loaded'});
              }
          };
      } else {  //Others
          script.onload = () => {
              this.scripts[name].loaded = true;
              resolve({script: name, loaded: true, status: 'Loaded'});
          };
      }
      script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
      document.getElementsByTagName('head')[0].appendChild(script);
    } else {
      resolve({ script: name, loaded: true, status: 'Already Loaded' });
    }
  });
}

}
