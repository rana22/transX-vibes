import { Validator } from './validator';

export class FormFields {

    // key : any;
    label?: string;
    name?: string;
    inputType?: string;
    options?: string[];
    collections?: any;
    type: string;
    value?: any;
    validations?: Validator[];
    
}