import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Client } from 'src/app/Models/client.model';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  clientsList: Client[] = []
  constructor(

    private service: AdminService,
    private toast: NgToastService
  ) { }


  deleteClient(id: number) {
    if (confirm("Do you want to delete this client ?")) {
      this.service.deleteClient(id).subscribe()
      window.location.reload();
    }
  }



  ngOnInit(): void {
    this.service.getClients().subscribe(data => {
      this.clientsList = data
    })
  }





}
