export interface IMerchant {
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    licenseNumber: string;
    status: string;
    imageId: number;
    store: {
        name: string,
        description: string,
        categories: any
    };
    address: {
        num: string,
        locality: string,
        town: string,
        city: string,
        pinCode: number,
        state: string,
        country: string
    };
    bankAccount: {
        bankId: number,
        accountNumber: string
    };
    documents: any;
}

export class Merchant {
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    licenseNumber: string;
    status: string;
    imageId: number;
    store: {
        name: string,
        description: string,
        categories: any
    };
    address: {
        num: string,
        locality: string,
        town: string,
        city: string,
        pinCode: number,
        state: string,
        country: string
    };
    bankAccount: {
        bankId: number,
        accountNumber: string
    };
    documents: any;

    constructor(merchant) {
        this.firstName = merchant.firstName ? merchant.firstName : '';
        this.lastName = merchant.lastName ? merchant.lastName : '';
        this.email = merchant.email ? merchant.email : '';
        this.mobileNumber = merchant.mobileNumber ? merchant.mobileNumber : '';
        this.licenseNumber = merchant.licenseNumber ? merchant.licenseNumber : '';
        this.status = merchant.status ? merchant.status : '';
        this.imageId = merchant.imageId ? merchant.imageId : '';
        this.store = {
            name: merchant.store ? merchant.store.name : '',
            description: merchant.store ? merchant.store.description : '',
            categories: merchant.store ? merchant.store.categories : [],
        };
        this.address = {
            num: merchant.address ? merchant.address.num : '',
            locality: merchant.address ? merchant.address.locality : '',
            town: merchant.address ? merchant.address.town : '',
            city: merchant.address ? merchant.address.city : '',
            pinCode: merchant.address ? merchant.address.pinCode : '',
            state: merchant.address ? merchant.address.state : '',
            country: merchant.address ? merchant.address.country : '',
        };
        this.bankAccount = {
            bankId: merchant.bankAccount ? merchant.bankAccount.bankId : 0,
            accountNumber: merchant.bankAccount ? merchant.bankAccount.accountNumber : ''
        };
        this.documents = merchant.documents ? merchant.documents : [];
    }
}
