import { Component, OnInit } from '@angular/core';
// import FormsModule
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Admin } from 'src/app/Models/admin.model';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(
    private service: AdminService,
    private router: Router,
    private toast: NgToastService

  ) {
    this.a = new Admin();
  }

  a: Admin;


  show() {
    //alert(this.nom + this.password)
    //console.log(this.nom + this.password);
    this.service.loginAdmin(this.a).subscribe(
      (data) => {
        console.log(data);
        //alert("Success sahit ye zayn")
        localStorage.setItem("adminToken", data.token);
        //router link go to http://localhost:4200/admin/home
        this.router.navigate(['admin/home']);
      }
    )
  }
  ngOnInit(): void {
    let token = localStorage.getItem("adminToken")
    if (token != null) {
      this.router.navigate(['admin/home']);
      this.toast.warning({
        detail: "You are already loged in"
      })
    }
  }
}
