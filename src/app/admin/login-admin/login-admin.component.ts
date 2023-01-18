import { Component } from '@angular/core';
// import FormsModule
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Models/admin.model';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  constructor(
    private service: AdminService,
    private router : Router
    ) {
    this.a = new Admin();
  }
  a : Admin;


  show(){
    //alert(this.nom + this.password)
    //console.log(this.nom + this.password);
    this.service.loginAdmin(this.a).subscribe(
      (data) => {
        console.log(data);
        //alert("Success sahit ye zayn")
        localStorage.setItem("adminToken",data.token);
        //router link go to http://localhost:4200/admin/home
        this.router.navigate(['admin/home']);
      }
    )
  }
}
