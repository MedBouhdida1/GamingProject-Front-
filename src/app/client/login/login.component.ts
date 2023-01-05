import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Client } from 'src/app/Models/client.model';
import { NgToastService } from 'ng-angular-popup';
import { ClientService } from '../Services/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {




  client = new Client()

  constructor(
    private toast: NgToastService,

    private router: Router,
    private service: ClientService
  ) { }



  login() {
    if (this.client.email == null || this.client.password == null) {
      this.toast.warning({
        detail: "Fields are required"
      })
    }
    else {
      this.service.loginClient(this.client).subscribe(res => {
        let token = res.token;
        localStorage.setItem("Token", token)
        this.router.navigate(["/client/home"])
        this.toast.success({
          detail: "Login success"
        })

      }, err => {
        this.toast.warning({
          detail: "Wrong data"
        })
        console.log(err)

      }
      )
    }

  }
  ngOnInit(): void {
  }


}
