import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Client } from 'src/app/Models/client.model';
import { Coach } from 'src/app/Models/Coach.model';
import { Demande } from 'src/app/Models/Demande.model';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-list-requests',
  templateUrl: './list-requests.component.html',
  styleUrls: ['./list-requests.component.css']
})
export class ListRequestsComponent implements OnInit {


  client = new Client()
  coach = new Coach()
  demandesList: Demande[] = []
  constructor(
    private router: Router,
    private service: AdminService,
    private toast: NgToastService

  ) { }

  AcceptDemande(demande: Demande) {
    if (confirm("Do you want to accept this request ?")) {
      if (demande.coachId == null) {
        this.service.AcceptDemande(demande.id!).subscribe(data => {
          this.client = demande.client!
          this.coach.firstName = this.client.firstName
          this.coach.lastName = this.client.lastName
          this.coach.email = this.client.email
          this.coach.password = this.client.password
          this.service.AddCoach(this.coach).subscribe(coach => {
            console.log(coach)
            demande.coachId = coach.id
            this.service.updateDemande(demande.id!, demande).subscribe()
          })
          localStorage.removeItem('Token') //to force user login again to enter as coach not client
        })
      }
      else {
        this.service.AcceptDemande(demande.id!).subscribe()
      }

    }
    setTimeout(() => {
      location.reload();
    }, 500);


  }
  // toastmsg(messgae: string) {
  //   setTimeout(() => {
  //     this.toast.success({
  //       detail: messgae
  //     });
  //   }, 2000);
  // }

  DeleteDemande(id: number) {
    if (confirm("Do you want to delete this demande ?")) {
      this.service.deleteDemande(id).subscribe();
      window.location.reload();
      // this.toastmsg("Demande has been successfully deleted");
    }
  }


  ngOnInit(): void {

    this.service.getDemandes().subscribe(data => {
      this.demandesList = data
    })
  }

}
