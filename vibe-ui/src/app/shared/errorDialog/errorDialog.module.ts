import { ErrorDialogService } from './errorDialogService';
import { NgModule } from '@angular/core';
import { ErrorDialog} from "./errorDialog";
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  imports: [
    MaterialModule,
  ],
  exports: [
    ErrorDialog,
  ],
  declarations: [
    ErrorDialog,
  ],
  providers: [
    ErrorDialogService,
  ],
  entryComponents: [
    ErrorDialog,
  ],
})
export class ErrorDialogModule { }
