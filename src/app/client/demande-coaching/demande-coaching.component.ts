import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgToastService } from 'ng-angular-popup';
import { Client } from 'src/app/Models/client.model';
import { Demande } from 'src/app/Models/Demande.model';
import { ClientService } from '../Services/client.service';
import * as saveAs from 'file-saver';
import { Coach } from 'src/app/Models/Coach.model';

@Component({
  selector: 'app-demande-coaching',
  templateUrl: './demande-coaching.component.html',
  styleUrls: ['./demande-coaching.component.css']
})
export class DemandeCoachingComponent implements OnInit {
  demande = new Demande()
  helper = new JwtHelperService()
  token: any
  user = new Client()
  coach = new Coach()
  constructor(
    private router: Router,
    private toast: NgToastService,

    private service: ClientService
  ) { }



  checkProperties(obj: any) {
    for (var key in obj) {
      if (obj[key] == null || obj[key] == '') {
        if (key == "id" || key == "clientId" || key == "client" || key == "coachId" || key == "coach" || key == "etat") {
          continue;
        }
        return false;
      }
    }
    return true;
  }



  async sendrequest() {
    console.log(this.demande.game)
    this.token = localStorage.getItem("Token")
    let decodeToken = this.helper.decodeToken(this.token);
    let role = decodeToken.Role
    if (role == "Client") {
      if (this.checkProperties(this.demande)) {
        this.user = await this.service.getClientByEmail(decodeToken.Email).toPromise();
        if (this.user.demande != null) {
          this.toast.warning({
            detail: "You have already send a request "
          })
          return;
        }
        this.demande.clientId = this.user.id
        await this.service.addDemande(this.demande).toPromise();
        this.router.navigate(["/client/home"])
        this.toast.success({
          detail: "Your request is being processed"
        })
      }
      else {
        this.toast.warning({
          detail: "Fields required"
        })
      }
    }
    else if (role == "Coach") {
      if (this.checkProperties(this.demande)) {
        this.coach = await this.service.getCoachByEmail(decodeToken.Email).toPromise();
        for (let index of this.coach.demandes!) {
          if (index.game == this.demande.game) {
            this.toast.warning({
              detail: "You have already sent a request for this game"
            })
            return;
          }
        }
        this.demande.coachId = this.coach.id;
        await this.service.addDemande(this.demande).toPromise();
        this.router.navigate(["/client/home"])
        this.toast.success({
          detail: "Your request is being processed"
        })
      }
      else {
        this.toast.warning({
          detail: "Fields required"
        })
      }
    }
  }




  ngOnInit(): void {


  }

}
