import { Injectable } from '@angular/core';
import { FormField } from '../model/form-fields';

@Injectable({
  providedIn: 'root'
})
export class FormConfigService {

  public fields : FormField[];
  constructor() { }


}
