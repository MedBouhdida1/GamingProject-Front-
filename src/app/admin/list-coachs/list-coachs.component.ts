import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Coach } from 'src/app/Models/Coach.model';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-list-coachs',
  templateUrl: './list-coachs.component.html',
  styleUrls: ['./list-coachs.component.css']
})
export class ListCoachsComponent implements OnInit {


  listCoachs: Coach[] = []

  constructor(
    private service: AdminService,
    private toast: NgToastService

  ) { }


  async deleteCoach(id: number) {
    if (confirm("Do you want to delete this Coach ?")) {
      this.service.deleteCoach(id).subscribe()
      window.location.reload();
    }
  }


  ngOnInit(): void {

    this.service.getCoachs().subscribe(data => {
      this.listCoachs = data
    })
  }




}
