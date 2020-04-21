import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Merchant} from './merchant.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class MerchantService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  createMerchant(data: any) {
    return this.http.post(this.apiUrl + 'superadmin/merchant', data);
  }
}
