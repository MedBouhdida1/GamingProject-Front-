import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Client } from 'src/app/Models/client.model';
import { Coach } from 'src/app/Models/Coach.model';
import { ClientService } from '../Services/client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token: any;
  helper = new JwtHelperService()
  User = new Coach() || new Client()
  role?: string

  constructor(
    private router: Router,
    private service: ClientService
  ) { }


  Logout() {
    this.router.navigate(["/client/home"])
    localStorage.clear()
    window.location.reload()


  }

  ngOnInit(): void {
    this.token = localStorage.getItem("Token")
    if (this.token != null) {
      let decodeToken = this.helper.decodeToken(this.token);
      let UserEmail = decodeToken.Email
      this.role = decodeToken.Role
      console.log(this.role)
      if (this.role == "Client") {
        this.service.getClientByEmail(UserEmail).subscribe(data => {
          this.User = data
          console.log(this.User)
          console.log("idddddddddddddddd: "+this.User.id);
          localStorage.removeItem("coachId");


        })
      }
      else {
        this.service.getCoachByEmail(UserEmail).subscribe(data => {
          this.User = data
          console.log(this.User)
//          console.log("idddddddddddddddd: "+typeof(this.User.id));
          localStorage.setItem("coachId",""+this.User.id)
        })
      }



    }
  }







}
