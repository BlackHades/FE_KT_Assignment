import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UploadingService {
  constructor(private http: HttpClient) { }

  public uploadFormData(formData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + environment.apiKey
    });
    return this.http.post<any>(`${environment.apiUrl}/merchant/file/`, formData, {headers});
  }
}