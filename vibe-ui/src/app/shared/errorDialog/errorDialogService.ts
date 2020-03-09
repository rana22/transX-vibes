import { Observable } from 'rxjs/Rx';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';
import {ErrorDialog} from "./errorDialog";

@Injectable()
export class ErrorDialogService {

  constructor(private dialog: MatDialog) { }

  public open(title: string, message: string): Observable<boolean> {

    let dialogRef: MatDialogRef<ErrorDialog>;

    dialogRef = this.dialog.open(ErrorDialog);
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }
}
