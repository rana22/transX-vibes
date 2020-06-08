import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { IAngularMyDpOptions,IMyDateModel } from 'angular-mydatepicker';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit, AfterViewInit {

  public arForm: FormGroup;
  constructor(private fb: FormBuilder,) { }

  ngOnInit() {
    this.arForm = this.fb.group({});
  }

  ngAfterViewInit(): void {
    this.authRepFormInit();
  }

  public myDatePickerOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd.mm.yyyy'
  };

  resetTomorrowDate(): void {
    // Reset date picker to specific date (tomorrow)
    let date: Date = new Date();
    date.setDate(date.getDate() + 1);
    let model: IMyDateModel = {isRange: false, singleDate: {jsDate: date}, dateRange: null};
    
  }

  clearDate(): void {
  }

  disable(): void {
  }

  authRepFormInit() {
    this.arForm = this.fb.group({
      suffix: [''],
      id: [''],
      firstName: [''],
      middleName: [''],
      lastName: ['', [Validators.required]],
      dob: ['', Validators.required],
      gender: [new FormControl()],
      ssn: [''],
      noSSNInd: [''],
      alienID: [''],
      otherId: new FormControl(),
      accessType: [''],
      authorizedAccessType: [''],
      authorizedRepType: [''],
      ein: new FormControl(),
      arAddressVO: this.fb.array([this.addressform()]),
      phoneNbr: [''],
      extentionNos: [''],
      status: [''],
    });
  }
  addressform(): FormGroup {
    return this.fb.group({
      addressLine1: ['', [Validators.required]],
      addressLine2: [''],
      city: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      county: [''],
      state: ['', [Validators.required]],
      selectedAddressType: [''],
      id: ['']

    });
  }

  submit(){
    console.log(this.arForm);
  }
}
