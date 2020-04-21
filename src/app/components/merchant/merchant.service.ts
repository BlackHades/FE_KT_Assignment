import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Merchant} from './merchant.model';

@Injectable()
export class MerchantService {
  constructor(private http: HttpClient) {
  }

  createMerchant(merchant: Merchant) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      withCredentials: 'true',
      Authorization: 'Token ' + environment.apiKey
    });

    return this.http.post(environment.apiUrl + 'superadmin/merchant', merchant, {headers});
  }
}
