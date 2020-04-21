import {Component, OnInit} from '@angular/core';
import {MerchantService} from './merchant.service';
import {IMerchant} from './merchant.model';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.page.html',
  styleUrls: ['./merchant.page.scss']
})

export class MerchantComponent implements OnInit {

  alert: string;
  isLoading: boolean;
  merchant: IMerchant;

  constructor(
      private merchantService: MerchantService,
  ) {

  }

  ngOnInit() {

  }

  onSubmit() {
    this.isLoading = true;
    this.resetAlert();
    const param = {
      first_name: 'Ayush1',
      last_name: 'Jayaswa1l',
      email: 'ayushj.jay11aswal@gmail.com',
      mobile_number: '+919999999999',
      license_number: 'ddf1dfdf',
      status: 'active',
      image_id: 1,
      store: {
        name: 'Ayush Store',
        description: 'Ayush Store',
        categories: [
          1
        ]
      },
      address: {
        num: '208, Lifestyle Lauret',
        locality: 'HBR Layout',
        town: 'Lagos',
        city: 'Bangalore',
        pin_code: 560076,
        state: 'Karnataka',
        country: 'India'
      },
      bank_account: {
        bank_id: 1,
        account_number: 'dsdsffdf'
      },
      documents: [
        1
      ]
    };

    this.merchantService.createMerchant(param)
        .subscribe((res: any) => {
              if (res.success) {
                this.alert = 'success';
                this.isLoading = false;
              }
            },
            e => console.log('error', e));
  }

  resetAlert() {
    this.alert = '';
  }
}
