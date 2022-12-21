import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {
    // document.querySelectorAll("link").forEach(el => el.remove());
    //remove scripts
    // document.querySelectorAll("script").forEach(el => el.remove());
    //add all links
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = './../assets/css/allClient.css';
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
    //fix bugs(home page cards + coaching route) by forcing to load js files whenever route is changed ("Ahmed Ben Hamouda")
    router.events.subscribe((val) => {

      if (val instanceof NavigationStart && !val.url.includes('admin')) {
        //refresh preloader
        document.getElementById('preloader')?.remove();
        var bodyPreload = document.getElementsByTagName("body")[0];
        var elemDiv = document.createElement("div");
        elemDiv.classList.add("preloader");
        elemDiv.id = "preloader";
        bodyPreload.prepend(elemDiv);


        //remove links

        //load all js
        var body = document.getElementsByTagName('body');
        console.log(body); //console to test wtf in there
        const scriptToLoad = [
          "./../assets/js/jquery.min.js",
          './../assets/js/jquery-ui.js',
          './../assets/js/bootstrap.min.js',
          './../assets/js/fontawesome.js',
          './../assets/js/plugin/slick.js',
          './../assets/js/plugin/jquery.nice-select.min.js',
          './../assets/js/plugin/counter.js',
          './../assets/js/plugin/waypoint.min.js',
          './../assets/js/plugin/jquery.magnific-popup.min.js',
          './../assets/js/plugin/wow.min.js',
          './../assets/js/plugin/plugin.js',
          './../assets/js/main.js',
        ];

        for (var loadHelper of scriptToLoad) {
          var jsLoader = document.createElement('script');
          jsLoader.src = loadHelper.toString();
          // jsLoader.defer=true;
          body[0].appendChild(jsLoader);
        }

      }

    })


  }

}
