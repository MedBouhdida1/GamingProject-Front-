import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { AdminService } from 'src/app/admin/Service/admin.service';
import { Coach } from 'src/app/Models/Coach.model';
import { Demande } from 'src/app/Models/Demande.model';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css']
})
export class CoachesComponent implements OnInit {

  coaches: Coach[] = []
  constructor(
    private service: AdminService,
    private toast: NgToastService
  ) { }




  ngOnInit(): void {
    this.service.getCoachs().subscribe(data => {
      this.coaches = data
    })

  }


}
