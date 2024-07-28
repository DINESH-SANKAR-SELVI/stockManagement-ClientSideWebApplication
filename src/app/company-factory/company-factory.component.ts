import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CompanyType } from '../data-types';

@Component({
  selector: 'app-company-factory',
  templateUrl: './company-factory.component.html',
  styleUrl: './company-factory.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()]
})
export class CompanyFactoryComponent {
  companyForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog : MatDialogRef<CompanyFactoryComponent>
  ) { }

  ngOnInit(): void {
    this.companyForm = this.fb.group({
      companyId: [''],
      companyDescription: [''],
      companyTypeId: [''],
      status: [''],
      industry: [''],
      addressCountry: [''],
      foundedDate: [''],
      websiteURL: [''],
      addressCity: [''],
      addressState: [''],
      addressStreet: [''],
      companyName: [''],
      phone: [''],
      revenue: [0],
      email: [''],
      addressPostalCode: [''],
      numberOfEmployees: [0],
      ceo: ['']
    });

    if(this.data.companyTypeDetails != null){
      this.companyForm.patchValue(this.data.companyTypeDetails);
    }
  }

  onSubmit() {
    if (this.companyForm.valid) {
      this.dialog.close(this.companyForm.getRawValue() as CompanyType);
    } 
  }
}
