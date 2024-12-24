export class Application {
    applicantID:       number;
    fullName:          string;
    applicationStatus: string;
    panCard:           string;
    dateOfBirth:       Date;
    email:             string;
    phone:             string;
    address:           string;
    city:              string;
    state:             string;
    zipCode:           string;
    annualIncome:      number;
    employmentStatus:  string;
    creditScore:       number;
    assets:            string;
    dateApplied:       Date;
    Loans:             Loan[];
    constructor() {
        this.Loans = [];
        this.dateApplied = new Date();
        this.dateOfBirth = new Date();
        this.assets = '';
        this.employmentStatus = '';
        this.annualIncome = 0;
        this.zipCode = '';
        this.state = '';
        this.city = '';
        this.address = '';
        this.phone = '';
        this.email = '';
        this.panCard = '';
        this.applicationStatus = '';
        this.fullName = '';
        this.applicantID = 0;
        this.creditScore = 0;
    }
}

export class Loan {
    loanID:      number;
    applicantID: number;
    bankName:    string;
    loanAmount:  number;
    emi:         number;
    constructor() {
        this.emi = 0;
        this.loanAmount = 0;
        this.bankName = '';
        this.applicantID = 0;
        this.loanID = 0;
    }
}

export class ApiResponseModel {
    result: boolean;
    message: string;
    data: any;
    constructor() {
        this.data = null;
        this.message = '';
        this.result = false;
    }
}