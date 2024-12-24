import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseModel, Application } from '../model/application.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationServiceService {

  constructor(private http: HttpClient) { }

  addApplication(application: Application) : Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>('https://projectapi.gerasim.in/api/Loan/AddNewApplication', application);
  }
  
  getApplications() : Observable<Application> {
    return this.http.get<Application>('https://projectapi.gerasim.in/api/Loan/AddNewApplication');
  }
}
