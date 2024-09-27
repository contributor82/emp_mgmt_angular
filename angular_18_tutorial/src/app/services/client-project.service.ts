import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/class/interface/apiresponsemodel';
import { ClientProject } from '../model/class/ClientProject';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientProjectService {

  constructor(private http: HttpClient) { }

  getAllClientProjects(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(Constant.API_METHOD.GET_ALL_CLIENT_PROJECTS);
  }

  getProjectsByClientId(clientId: number): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(Constant.API_METHOD.GET_PROJECTS_BY_CLIENT_ID + clientId);
  }

  getProjectsByProjectId(clientProjectId: number): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(Constant.API_METHOD.GET_PROJECTS_BY_PROJECT_ID + clientProjectId);
  }

  addUpdateClientProject(obj: ClientProject): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(Constant.API_METHOD.ADD_UPDATE_CLIENT_PROJECT, obj);
  }

  deleteProjectByProjectId(clientProjectId: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(Constant.API_METHOD.DELETE_PROJECT_BY_PROJECT_ID + clientProjectId);
  }

}
