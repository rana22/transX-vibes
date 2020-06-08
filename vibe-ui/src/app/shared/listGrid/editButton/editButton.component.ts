import {Component} from "@angular/core";
import {AgRendererComponent} from "ag-grid-angular";

@Component({
  selector: 'edit-button',
  styleUrls: ['./editButton.component.scss'],
  template: `<button mat-raised-button type="button" (click)="invokeEdit()" color="primary" class="mat-button mat-small">
        Edit <mat-icon>create</mat-icon>
        </button>`
})
export class EditButtonComponent implements AgRendererComponent {
  private params:any;
  agInit(params:any):void {
    this.params = params;
  }

  refresh(params: any): any {
  this.params = params;
  }

  public invokeEdit() {
    this.params.context.componentParent.onActionViewClick(this.params.data);
  }

}
