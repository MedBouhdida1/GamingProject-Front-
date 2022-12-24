import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Client } from 'src/app/Models/client.model';
import { CrudService } from 'src/app/Services/crud.service';
import { NgToastService } from 'ng-angular-popup';

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
    private service: CrudService
  ) { }



  login() {
    if (this.client.Email == null || this.client.Password == null) {
      this.toast.error({
        detail: "Fields are required"
      })
    }
    this.service.loginClient(this.client).subscribe(res => {
      let token = res.token;
      localStorage.setItem("Token", token)
      this.router.navigate(["/client/home"])
      this.toast.success({
        detail: "Login success"
      })

    }, err => {
      this.toast.error({
        detail: "Wrong data"
      })
      console.log(err)

    })
  }
  ngOnInit(): void {
  }


}
