import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Client } from 'src/app/Models/client.model';
import { ClientService } from '../Services/client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  client = new Client()

  constructor(

    private router: Router,
    private service: ClientService,
    private toast: NgToastService
  ) { }



  register() {
    if (this.client.firstName == '' || this.client.lastName == '' || this.client.email == '' || this.client.password == '') {
      this.toast.error({
        detail: "Fields required"
      })
    }
    else {
      this.service.registerClient(this.client).subscribe(res => {
        console.log(res)
        this.toast.success({
          detail: "Register success"
        })

        this.router.navigate(["/client/login"])
      }, err => {
        this.toast.error({
          detail: "Email already used"
        })

      }
      )
    }

  }


  ngOnInit(): void {
    let token = localStorage.getItem("Token")
    if (token != null) {
      this.router.navigate(['client/home']);
      this.toast.warning({
        detail: "You are already loged in"
      })
    }
  }

}
