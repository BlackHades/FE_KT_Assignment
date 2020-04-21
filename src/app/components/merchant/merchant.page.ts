import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MerchantService} from './merchant.service';
import {IMerchant, Merchant} from './merchant.model';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.page.html',
  styleUrls: ['./merchant.page.scss'],
})

export class MerchantComponent implements OnInit {
  public folder: string;
  alert: string;
  isLoading: boolean;
  merchant: IMerchant;
  businessCategory = [];

  @ViewChild('merchantForm', {static: true}) form: NgForm;


  constructor(private activatedRoute: ActivatedRoute, private merchantService: MerchantService) {
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.merchant = new Merchant({});
    console.log('this merchant', this.merchant);

  }

  onSubmit() {
    this.isLoading = true;
    this.resetAlert();
    console.log('this form data', this.form, this.merchant);

    this.merchantService.createMerchant(this.merchant)
        .subscribe((res: any) => {
              if (res.success) {
                this.alert = 'success';
                this.isLoading = false;
              }
            },
            e => {
              this.isLoading = false;
              console.log('error', e);
            });
  }

  selectCategory(e: any) {
    if (!this.merchant.store.categories.find(c => c === e)) {
      this.merchant.store.categories.push(e);
    }
  }

  addBusinessCategory() {
    const value = this.businessCategory.length + 1;
    this.businessCategory.push({
      label: 'Jewelry Category',
      name: 'business_category_' + value,
      value
    });
  }

  resetAlert() {
    this.alert = '';
  }
}
