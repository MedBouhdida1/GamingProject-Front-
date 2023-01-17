import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Client } from '../../Models/client.model';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from 'rxjs';
import { Demande } from 'src/app/Models/Demande.model';
import { Coach } from 'src/app/Models/Coach.model';
import { Service } from 'src/app/Models/Service.model';

const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  registerClientUrl = "https://localhost:7256/api/client/register"
  LoginClientUrl = "https://localhost:7256/api/client/login"
  apiUrl = "https://localhost:7256/api"
  addDemandeUrl = "https://localhost:7256/api/demande"




  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  registerClient(client: Client) {
    return this.http.post<any>(this.registerClientUrl, client);
  }

  loginClient(client: Client) {
    return this.http.post<any>(this.LoginClientUrl, client);
  }
  public getClientByEmail(email: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/client/email/${email}`)
  }


  public getCoachByEmail(email: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/coach/email/${email}`)
  }
  addDemande(demande: Demande) {
    return this.http.post<any>(this.addDemandeUrl, demande);
  }


  updateClient(id: number, client: Client): Observable<Client> {
    const URL = `${this.apiUrl + "/client"}/${id}`
    return this.http.put<Client>(URL, client, httpOption);
  }

  getCoachs(): Observable<Coach[]> {
    return this.http.get<Coach[]>(this.apiUrl + "/coach")
  }



  getCoachDetails(a: string){

    return this.http.get<any>(this.apiUrl+"/coach/"+a);
}

  AddServiceByCoachId(service: Service, coachId: number) {
    const URL = `${this.apiUrl + "/service/add"}/${coachId}`
    return this.http.post<any>(URL, service);
  }

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.apiUrl + "/service")
  }
}
