import { Injectable } from '@angular/core';
import { FormFields } from '../model/form-fields';

@Injectable({
  providedIn: 'root'
})
export class FormConfigService {

  public fields : FormFields[];
  constructor() { }


}
