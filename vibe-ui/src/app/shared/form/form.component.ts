import { Component, OnInit } from '@angular/core';
import { DocumentDetails } from 'src/app/core/models/document';
import { FormFieldModel } from './model/form.field.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  // styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public fields : FormFieldModel[];

  constructor() { }

  ngOnInit() {
    this.fields = [];
    let field1 = new FormFieldModel();
    let field2 = new FormFieldModel();
    field1.key = 'Title';
    field1.value = 'text';
    field2.key = 'Description';
    field2.value = 'text';
    this.fields.push(field1);
    this.fields.push(field2);
    
  }
  
}
