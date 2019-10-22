import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormField } from '../../model/form-fields';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: []
})
export class InputComponent implements OnInit {

  field: FormField;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}

}
