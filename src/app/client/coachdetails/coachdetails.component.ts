import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Coach } from 'src/app/Models/Coach.model';
import { ClientService } from '../Services/client.service';

@Component({
  selector: 'app-coachdetails',
  templateUrl: './coachdetails.component.html',
  styleUrls: ['./coachdetails.component.css']
})
export class CoachdetailsComponent {

  coach: Coach = new Coach();
  constructor(
    private z: ActivatedRoute,
    private service: ClientService,
    private toast: NgToastService
  ) {

  }

  ngOnInit(): void {
    ;
    this.service.getCoachDetails(this.z.snapshot.params['id']).subscribe(data => {
      this.coach = data
      console.log(this.coach);

    })

  }




}
