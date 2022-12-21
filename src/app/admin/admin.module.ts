import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ListCoachsComponent } from './list-coachs/list-coachs.component';
import { ListRequestsComponent } from './list-requests/list-requests.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';


// import "./../../assets/admin/"



@NgModule({
  declarations: [
    LoginAdminComponent,
    HomeAdminComponent,
    SidebarComponent,
    ListClientsComponent,
    ListCoachsComponent,
    ListRequestsComponent,
    RegisterAdminComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {

  constructor(private router: Router) {


    // router.events.subscribe((route)=>{
    //   if(route instanceof NavigationEnd || route instanceof NavigationStart)
    //   {


    //remove scrollTop from index.html (bug affected to login page)
    document.getElementsByClassName('scrollToTop')[0].remove();
    //remove all links
    document.querySelectorAll("link").forEach(el => el.remove());
    // remove all scripts
    document.querySelectorAll("script").forEach(el => el.remove());
    //remove loader from index
    document.getElementById("preloader")?.remove();
    //implement all css
    var head = document.getElementsByTagName("head");
    var styleAdmin = document.createElement("link");
    styleAdmin.href = "./../../assets/admin/allAdmin.css";
    styleAdmin.rel = 'stylesheet';
    head[0].appendChild(styleAdmin);

    //implement all js
    //cdn jquery:http:////ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js


    const allJsToImport = [
      './../../assets/admin/js/jquery-3.2.1.min.js',
      './../../assets/admin/js/popper.min.js',
      './../../assets/admin/js/bootstrap.min.js',
      './../../assets/admin//js/modernizr.custom.js',
      './../../assets/admin/plugins/morphin-search/classie.js',
      './../../assets/admin/plugins/morphin-search/morphin-search.js',
      './../../assets/admin/plugins/preloader/pathLoader.js',
      './../../assets/admin/plugins/preloader/preloader-main.js',
      './../../assets/admin/plugins/charts/Chart.min.js',
      './../../assets/admin/plugins/sparkline/jquery.sparkline.min.js',
      './../../assets/admin/plugins/sparkline/jquery.charts-sparkline.js',
      './../../assets/admin/plugins/customScroll/jquery.mCustomScrollbar.min.js',
      './../../assets/admin/plugins/sortable2/sortable.min.js',
      './../../assets/admin/plugins/dropzone/dropzone.js',
      './../../assets/admin/plugins/date-range/moment.min.js',
      './../../assets/admin/plugins/date-range/daterangepicker.js',
      './../../assets/admin/plugins/ckEditor/ckeditor.js',
      './../../assets/admin/plugins/data-tables/datatables.min.js',
      './../../assets/admin/plugins/editable/editable.js',
      './../../assets/admin/plugins/full-calendar/fullcalendar.min.js',

      './../../assets/admin/js/main.js',
    ];
    var body = document.getElementsByTagName('body');
    for (let jsLoader of allJsToImport) {
      let scriptElem = document.createElement("script");
      scriptElem.type = "text/javascript";
      scriptElem.src = jsLoader;
      body[0].appendChild(scriptElem);
    }

    //   }
    // })



  }

}
