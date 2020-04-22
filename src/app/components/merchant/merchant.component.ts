import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MerchantService} from './merchant.service';
import {Merchant} from './merchant.model';
import { MultiFileUploadComponent } from '../multi-file-upload/multi-file-upload.component';
import { FileUploader, FileLikeObject } from  'ng2-file-upload';
import { concat } from  'rxjs';
import {ToastController} from "@ionic/angular";


@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss'],
})

export class MerchantComponent implements OnInit {
  public folder: string;
  alert: string;
  isLoading: boolean;
  merchant: Merchant;
  businessCategory = [];
  @ViewChild(MultiFileUploadComponent,{static:false}) fileField: MultiFileUploadComponent;
  hasBaseDropZoneOver: any;
  fileUploader: any;
  uploadingService: any;

  constructor(private activatedRoute: ActivatedRoute, private merchantService: MerchantService, public toastController: ToastController) {
  }
  fileOverBase(event): void {
    this.hasBaseDropZoneOver = event;
  }
  getFiles(): FileLikeObject[] {
    return this.fileUploader.queue.map((fileItem) => {
      return fileItem.file;
    });
  }

  upload(){
    let files = this.fileField.getFiles();
    let requests = [];
    console.log(files);

    let formData = new FormData();
    formData.append('type', 'license');
    formData.append('description', 'photo');
    formData.append('file', 'image.jpg'); // Add any other data you want to send

    files.forEach((file) => {
      let formData = new FormData();
      formData.append('file' , file.rawFile, file.name);
      requests.push(this.uploadingService.uploadFormData(formData));

    });


    concat(...requests).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );

    // POST formData to Server

  }


  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.resetMerchant();
  }

  saveDraft() {
    localStorage.setItem('merchant',JSON.stringify(this.merchant));
    this.showToast('Current form has been saved to Draft','success');
  }

  showToast(message: string, color: string) {
    this.toastController.create({
      message,
      duration: 2000,
      animated: true,
      cssClass: 'my-toast',
      position: 'top',
      color,
    }).then((obj) => {
      obj.present();
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.isLoading = true;
    this.resetAlert();
    console.log('this form data', this.merchant);

    this.merchantService.createMerchant(this.merchant)
        .subscribe((res: any) => {
              this.resetMerchant();
              if (res.success) {
                this.alert = 'success';
                this.isLoading = false;
                this.showToast('new merchant with merchant id: '
                    + res.merchant.id + ' created successfully! ', 'success');
              }
            },
            e => {
              this.isLoading = false;
              this.showToast('Something went wrong! Unable to add merchant', 'danger');
              console.log('error', e);
            });
  }

  selectCategory(e: any) {
    if (!this.merchant.store.categories.find(c => c === e)) {
      this.merchant.store.categories.push(e);
    }
  }

  selectBank(e: any) {
    this.merchant.bank_account.bank_id = parseInt(e);
  }

  addBusinessCategory() {
    const value = this.businessCategory.length + 1;
    this.businessCategory.push({
      label: 'Jewelry Category',
      name: 'category' + value,
      value
    });
  }

  resetAlert() {
    this.alert = '';
  }
  resetMerchant() {
    this.merchant = new Merchant({});

  }
}
