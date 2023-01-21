import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Models/client.model';
import { ClientService } from '../Services/client.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  editMod:boolean = false;
  loader:boolean = false;
  
  clientProfileData:Client=new Client();
  jwtHelper:JwtHelperService = new JwtHelperService();
  constructor(private clientService:ClientService)
  {}
  ngOnInit()
  {
    if(localStorage.getItem("Token"))
    {
      var email = this.jwtHelper.decodeToken(localStorage.getItem("Token")?.toString()||"").Email;
      this.clientService.getClientDetails(email).subscribe((dataClient)=>this.clientProfileData = dataClient,(err)=>console.log(err));
    }

  }

  switchMod = ()=>this.editMod=!this.editMod;
  editProfile=()=>{
    this.loader = true;
    this.clientService.updateClient(this.clientProfileData.id! ,this.clientProfileData).subscribe((dataUpdated)=>{this.clientProfileData = dataUpdated;},
    (err)=>console.log(err),
    ()=> setTimeout(() => {
      this.loader = !this.loader
    }, 1000) );
  };

}
