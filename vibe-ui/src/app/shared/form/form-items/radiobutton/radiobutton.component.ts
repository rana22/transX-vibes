import { Component, OnInit } from '@angular/core';
import { FormField } from '../../model/form-fields';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss']
})
export class RadiobuttonComponent implements OnInit {

  field: FormField;
  group: FormGroup;
  constructor() {}
  ngOnInit() {
    
  }

}
