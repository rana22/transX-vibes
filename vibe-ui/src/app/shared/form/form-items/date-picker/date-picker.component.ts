import { Component, OnInit } from '@angular/core';
import { FormFields } from '../../model/form-fields';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  field: FormFields;
  group: FormGroup;
  constructor() {}
  ngOnInit() {
    
  }

}
