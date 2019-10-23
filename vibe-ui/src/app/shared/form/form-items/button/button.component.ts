import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../../model/form-fields';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
  // styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  field: FormField;
  group: FormGroup;
  constructor() {}
  ngOnInit() {
  }

}
