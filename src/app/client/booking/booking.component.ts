import {  Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ClientService } from '../Services/client.service';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

date : Date = new Date();
token :any;
helper = new JwtHelperService()
   constructor( private router: Router,
    private service: ClientService) { 
  
   }
   ngOnInit() {
    
   
}
buyService(){
  this.token = localStorage.getItem("Token")
  let decodeToken = this.helper.decodeToken(this.token);
  console.log(decodeToken);
  console.log(this.date);
}

  
}
