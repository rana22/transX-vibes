import { Validator } from './validator';

export class FormField {

    // key : any;
    label?: string;
    name?: string;
    inputType?: string;
    options?: string[];
    collections?: any;
    type: string;
    value?: any;
    validations?: Validator[];
    action?: String;
    
}

export class FormConfig {
    formFields : FormField[]; 
    title : string;
}