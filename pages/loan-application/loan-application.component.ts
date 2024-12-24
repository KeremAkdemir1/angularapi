import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Application, Loan } from '../../model/application.model';
import { ApplicationServiceService } from '../../service/application-service.service';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css'
})
export class LoanApplicationComponent {
  application: Application = new Application();
  loan: Loan = new Loan();
  applicationService = inject(ApplicationServiceService);
  addLoan = () => {
    this.application.Loans.push(this.loan);
    this.loan = new Loan();
  }
  
  submitApplication = () => {
    const panCard = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    this.application.panCard = panCard;
    this.application.applicationStatus = 'Pending';
    this.applicationService.addApplication(this.application).subscribe((response) => {
      console.log(response);
    });
  }
}
