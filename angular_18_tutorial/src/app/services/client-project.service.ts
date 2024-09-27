import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/class/interface/apiresponsemodel';
import { ClientProject } from '../model/class/ClientProject';

@Injectable({
  providedIn: 'root'
})
export class ClientProjectService {

  constructor(private http: HttpClient) { }

  getAllClientProjects(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>('api/ClientStrive/GetAllClientProjects');
  }

  getProjectsByClientId(clientId: number): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>('api/ClientStrive/GetProjectsByClientId?clientId=' + clientId);
  }

  getProjectsByProjectId(clientProjectId: number): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>('api/ClientStrive/GetProjectsByProjectId?projectId=' + clientProjectId);
  }

  addUpdateClientProject(obj: ClientProject): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>('api/ClientStrive/AddUpdateClientProject', obj);
  }

  deleteProjectByProjectId(clientProjectId: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>('api/ClientStrive/DeleteProjectByProjectId?projectId=' + clientProjectId);
  }

}
