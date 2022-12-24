import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Client } from '../Models/client.model';
import { JwtHelperService } from "@auth0/angular-jwt";

const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  registerClientUrl = "https://localhost:7256/api/Client/register"
  LoginClientUrl = "https://localhost:7256/api/Client/login"
  helper = new JwtHelperService()

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
}
