import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgToastService } from 'ng-angular-popup';
import { Coach } from 'src/app/Models/Coach.model';
import { Service } from 'src/app/Models/Service.model';
import { ClientService } from '../Services/client.service';
import * as _ from 'lodash';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-coaching',
  templateUrl: './coaching.component.html',
  styleUrls: ['./coaching.component.css']
})
export class CoachingComponent implements OnInit {
  helper = new JwtHelperService()
  coach = new Coach()
  Service = new Service()
  now = new Date();
  coachGames: string[] = []
  ListServices: Service[] = []
  role?: string;
  constructor(
    private router: Router,
    private toast: NgToastService,
    private service: ClientService,
    private modalService: NgbModal
  ) { }

  openmodal(content: any) {
    this.modalService.open(content, { size: 'lg', backdrop: 'static' });
  }
  options = [
    { name: 'League of Legends', value: 'League of Legends' },
    { name: 'Fortnite', value: 'Fortnite' },
    { name: 'Valorant', value: 'Valorant' },
  ];
  addService() {
    this.service.getServices().subscribe(data => {
      this.ListServices = data
      console.log(this.ListServices)
    })

    this.Service.dateCeation = this.now.toISOString().slice(0, 10);
    console.log(this.Service)
    if (_.every([this.Service.game, this.Service.Description, this.Service.price, this.Service.title], (val) => val !== null && val !== '')) {
      for (let demande of this.coach.demandes!) {
        if (demande.etat == 1) {
          this.coachGames.push(demande.game!)
        }
      }
      if (this.coachGames.includes(this.Service.game!)) {

        this.service.AddServiceByCoachId(this.Service, this.coach.id!).subscribe()
        this.modalService.dismissAll()
        this.toast.success({
          detail: "Service has been added succefully"
        })
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
      else {
        this.toast.warning({
          detail: "You cannot add a service in this game",
          summary: "You can send an add coaching game request"
        })
      }
    }
    else {
      this.toast.warning({
        detail: "all fields are required"
      })
    }
  }






  ngOnInit(): void {

    this.service.getServices().subscribe(data => {
      this.ListServices = data
      console.log(this.ListServices)
    })
    let token = localStorage.getItem("Token");
    if (token) {
      let decodeToken = this.helper.decodeToken(token);
      this.role = decodeToken.Role;
      if (decodeToken.Role == "Coach") {
        this.service.getCoachByEmail(decodeToken.Email).subscribe(data => {
          this.coach = data
          console.log(this.coach)
        })

      }
    }
  }

}
