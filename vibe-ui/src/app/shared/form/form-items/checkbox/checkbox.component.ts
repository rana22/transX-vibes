import { Component, OnInit } from '@angular/core';
import { FormFields } from '../../model/form-fields';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  field: FormFields;
  group: FormGroup;
  constructor() {}
  ngOnInit() {
    
  }

}
