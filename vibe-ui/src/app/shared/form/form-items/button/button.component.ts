import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFields } from '../../model/form-fields';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  field: FormFields;
  group: FormGroup;
  constructor() {}
  ngOnInit() {
  }

}
