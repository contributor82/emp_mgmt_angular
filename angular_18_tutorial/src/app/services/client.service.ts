import { Injectable } from '@angular/core';
import { APIResponseModel } from '../model/class/interface/apiresponsemodel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>('api/ClientStrive/GetAllClients');
  }

  addUpdateClient(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>('api/ClientStrive/AddUpdateClient', obj);
  }

  deleteClientByClientId(clientId: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>('api/ClientStrive/DeleteClientByClientId?clientId=' + clientId);
  }
}
