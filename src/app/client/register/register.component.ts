import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Client } from 'src/app/Models/client.model';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  client = new Client()

  constructor(

    private router: Router,
    private service: CrudService,
    private toast: NgToastService
  ) { }



  register() {
    if (this.client.FirstName == '' || this.client.LastName == '' || this.client.Email == '' || this.client.Password == '') {
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

  }

}
