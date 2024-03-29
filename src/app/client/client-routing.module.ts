import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BecomecoachComponent } from './becomecoach/becomecoach.component';
import { BookingComponent } from './booking/booking.component';
import { CoachdetailsComponent } from './coachdetails/coachdetails.component';
import { CoachesComponent } from './coaches/coaches.component';
import { CoachingComponent } from './coaching/coaching.component';
import { ContactComponent } from './contact/contact.component';
import { DemandeCoachingComponent } from './demande-coaching/demande-coaching.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ReservecoachComponent } from './reservecoach/reservecoach.component';
import { AuthClientGuard } from './Services/auth-client.guard';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'coaching', component: CoachingComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'coachdetails/:id', component: CoachdetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'becomecoach', component: BecomecoachComponent },
  { path: 'reservecoach', component: ReservecoachComponent, canActivate: [AuthClientGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'demandecoaching', component: DemandeCoachingComponent, canActivate: [AuthClientGuard] },
  { path: 'coaches', component: CoachesComponent,canActivate: [AuthClientGuard] },
  { path:'profile',component:ProfileComponent,canActivate: [AuthClientGuard] },
  { path: 'booking/:id', component: BookingComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
