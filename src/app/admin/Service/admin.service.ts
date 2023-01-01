import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/Models/client.model';
import { Coach } from 'src/app/Models/Coach.model';
import { Demande } from 'src/app/Models/Demande.model';


const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class AdminService {



  apiUrl = "https://localhost:7256/api"

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }




  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl + "/client")
  }
  deleteClient(id: number) {
    const URL = `${this.apiUrl + "/client"}/${id}`
    return this.http.delete(URL, httpOption)

  }

  getDemandes(): Observable<Demande[]> {
    return this.http.get<Demande[]>(this.apiUrl + "/demande")
  }

  AcceptDemande(id: number) {
    const URL = `${this.apiUrl + "/demande/etat"}/${id}`
    return this.http.put(URL, httpOption)

  }

  getCoachs(): Observable<Coach[]> {
    return this.http.get<Coach[]>(this.apiUrl + "/coach")
  }

  deleteCoach(id: number) {
    const URL = `${this.apiUrl + "/coach"}/${id}`
    return this.http.delete(URL, httpOption)

  }

  AddCoach(coach: Coach) {
    return this.http.post<any>(this.apiUrl + "/coach/registercoach", coach);
  }

  deleteDemande(id: number) {
    const URL = `${this.apiUrl + "/demande"}/${id}`
    return this.http.delete(URL, httpOption)

  }
  updateDemande(id: number, demande: Demande): Observable<Demande> {
    const URL = `${this.apiUrl + "/demande"}/${id}`
    return this.http.put<Demande>(URL, demande, httpOption);
  }
}
