import { Injectable } from '@angular/core';
import { APIResponseModel } from '../model/class/interface/apiresponsemodel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllUser() {
    return this.http.get(Constant.API_METHOD.GET_ALL_USERS);
  }

  getAllClients(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(Constant.API_METHOD.GET_ALL_CLIENT);
  }

  addUpdateClient(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(Constant.API_METHOD.ADD_UPDATE_CLIENT, obj);
  }

  deleteClientByClientId(clientId: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(Constant.API_METHOD.DELETE_CLIENT_BY_CLIENT_ID + clientId);
  }
}
