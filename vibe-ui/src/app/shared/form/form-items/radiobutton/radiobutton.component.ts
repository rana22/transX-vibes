import { Component, OnInit } from '@angular/core';
import { FormFields } from '../../model/form-fields';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss']
})
export class RadiobuttonComponent implements OnInit {

  field: FormFields;
  group: FormGroup;
  constructor() {}
  ngOnInit() {
    
  }

}
