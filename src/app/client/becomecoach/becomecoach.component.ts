import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgToastService } from 'ng-angular-popup';
import { Client } from 'src/app/Models/client.model';
import { Coach } from 'src/app/Models/Coach.model';
import { ClientService } from '../Services/client.service';

@Component({
  selector: 'app-becomecoach',
  templateUrl: './becomecoach.component.html',
  styleUrls: ['./becomecoach.component.css']
})
export class BecomecoachComponent implements OnInit {

  role?: string
  helper = new JwtHelperService()
  token: any
  user = new Coach() || new Client()


  constructor(

    private service: ClientService,
    private toast: NgToastService,
    private router: Router,


  ) { }



  ngOnInit(): void {
    this.token = localStorage.getItem("Token")
    if (this.token) {
      let decodeToken = this.helper.decodeToken(this.token)
      this.role = decodeToken.Role
    }

  }

}
