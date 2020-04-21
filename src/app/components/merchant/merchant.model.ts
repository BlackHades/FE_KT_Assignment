
export class Merchant {
    first_name: string;
    last_name: string;
    email: string;
    mobile_number: string;
    license_number: string;
    status: string;
    image_id: number;
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
    bank_account: {
        bank_id: number,
        account_number: string,
        bvn_number: string,
    };
    documents: any;

    constructor(merchant) {
        this.first_name = merchant.first_name || '';
        this.last_name = merchant.last_name ||  '';
        this.email = merchant.email || '';
        this.mobile_number = merchant.mobile_number || "";
        this.license_number = merchant.license_number || "";
        this.status = merchant.status || '';
        this.image_id = merchant.image_id ||'';
        this.store = {
            name: merchant.store && merchant.store.name || '',
            description:merchant.store && merchant.store.description || '',
            categories: merchant.store && merchant.store.categories || [],
        };
        this.address = merchant.address || "";
        this.bank_account = merchant.bank_account || {
            bank_id: 0,
            account_number: '',
            bvn_number:''
        };
        this.documents = merchant.documents || [];
    }
}
