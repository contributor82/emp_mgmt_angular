import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/class/interface/apiresponsemodel';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(Constant.API_METHOD.GET_ALL_EMPLOYEE);
  }
}
