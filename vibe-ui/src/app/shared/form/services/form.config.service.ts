import { Injectable } from '@angular/core';
import { FormFieldModel } from '../model/form.field.model';

@Injectable({
  providedIn: 'root'
})
export class FormConfigService {

  public fields : FormFieldModel[];
  constructor() { }


}
