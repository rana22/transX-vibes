import { Component, OnInit } from '@angular/core';
import { FormField } from '../../model/form-fields';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  field: FormField;
  group: FormGroup;
  constructor() {}
  ngOnInit() {
    
  }

}
