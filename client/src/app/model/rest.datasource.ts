import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Incident } from './incident.model';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

import { User } from './user.model';

const PROTOCOL = 'https';
const PORT = 3500;

@Injectable()
export class RestDataSource
{
  user: User;
  baseUrl: string;
  authToken: string;

  private httpOptions =
  {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient, 
              private jwtService: JwtHelperService)
  {
    this.user = new User();
    this.baseUrl = `${http}://${location.hostname}:${PORT}/`;
    // this.baseUrl = `/api/`;
  }
  

  getIncidents(): Observable<Incident[]>
  {
    return this.http.get<Incident[]>(this.baseUrl + 'incident-list');
  }

  authenticate(user: User): Observable<any>
  {
    // console.log(this.http.post<any>(this.baseUrl + 'login', user, this.httpOptions));
    // console.log(this.baseUrl);
    console.log(user)
    // console.log(this.httpOptions)
    return this.http.post<any>(this.baseUrl + 'login', user, this.httpOptions);
  }

  storeUserData(token: any, user: User): void
  {
    localStorage.setItem('id_token', 'Bearer ' + token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(): Observable<any>
  {
    this.authToken = null;
    this.user = null;
    localStorage.clear();

    return this.http.get<any>(this.baseUrl + 'logout', this.httpOptions);
  }

  loggedIn(): boolean
  {
    return !this.jwtService.isTokenExpired(this.authToken);
  }



 
  //may need to remove this part
  //create new function to call the JSON data -- json-server --watch
  //url='http://localhost:3500/incident-list';

  getAllIncident(){
    return this.http.get<Incident[]>(this.baseUrl + 'incident-list');
    //return this.http.get(this.url);
  }
  //end

  saveIncidentData(data: any): Observable<Incident>
  {
    console.log(JSON.stringify(data));
    return this.http.post(this.baseUrl + 'incident-list/add', data);
  }


  deleteIncident (id: any){
    return this.http.delete(`${this.baseUrl + 'incident-list/delete'}/${id}`);
  }

  getIncidentById(id: number){
    return this.http.get(`${this.baseUrl + 'incident-list'}/${id}`);
  }

  updateIncidentData(id: number, data: any){
    return this.http.put(`${this.baseUrl + 'incident-list/'}/${id}`, data);
  }

  //ended

  private loadToken(): void
  {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }
}