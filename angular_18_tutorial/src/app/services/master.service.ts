import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponseModel } from '../model/class/interface/apiresponsemodel';
import { Observable } from 'rxjs';

// Service is used to make an api call instead callling an api from component directly.

// Service decorater.
@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getAllRoles(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>('/api/ClientStrive/GetAllRoles');
  }

  getAllDesignation(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>('/api/ClientStrive/GetAllDesignation');
  }

}
