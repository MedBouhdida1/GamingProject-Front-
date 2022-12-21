import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private router:Router)
  {
    console.log(router.url.split("/")[this.router.url.split("/").length - 1])
  }
  currentUrl:string = this.router.url.split("/")[this.router.url.split("/").length - 1];


  
}
