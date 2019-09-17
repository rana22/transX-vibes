import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormFields } from '../../model/form-fields';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  field: FormFields;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}

}
