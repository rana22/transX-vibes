import { Component, OnInit } from '@angular/core';
import { FormField } from '../../model/form-fields';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  field: FormField;
  group: FormGroup;
  constructor() {}
  ngOnInit() {
    
  }

}
