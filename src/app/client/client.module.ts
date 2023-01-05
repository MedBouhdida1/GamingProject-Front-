import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { NavigationStart, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CoachingComponent } from './coaching/coaching.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoachdetailsComponent } from './coachdetails/coachdetails.component';
import { ContactComponent } from './contact/contact.component';
import { BecomecoachComponent } from './becomecoach/becomecoach.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ReservecoachComponent } from './reservecoach/reservecoach.component';
import { FormsModule } from '@angular/forms';
import { DemandeCoachingComponent } from './demande-coaching/demande-coaching.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CoachesComponent } from './coaches/coaches.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CoachingComponent,
    LoginComponent,
    RegisterComponent,
    CoachdetailsComponent,
    ContactComponent,
    BecomecoachComponent,
    AboutusComponent,
    ReservecoachComponent,
    DemandeCoachingComponent,
    CoachesComponent,



  ],
  imports: [

    CommonModule,
    ClientRoutingModule,
    FormsModule,
    NgSelectModule
  ]
})
export class ClientModule {

}
