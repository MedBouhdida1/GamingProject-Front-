import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ListCoachsComponent } from './list-coachs/list-coachs.component';
import { ListRequestsComponent } from './list-requests/list-requests.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';

const routes: Routes = [
  {
    path: 'home', component: HomeAdminComponent
  },
  {
    path: 'login', component: LoginAdminComponent
  },
  {
    path: 'clients', component: ListClientsComponent
  },
  {
    path: 'coachs', component: ListCoachsComponent
  },
  {
    path: 'requests', component: ListRequestsComponent
  },
  {
    path: 'register', component: RegisterAdminComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
