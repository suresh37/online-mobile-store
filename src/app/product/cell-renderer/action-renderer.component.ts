import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
    selector: 'child-cell',
    templateUrl: './action-renderer.component.html',
    styleUrls: ['./action-renderer.component.scss'],
})
export class ActionRenderer implements ICellRendererAngularComp {
    public params: any;

    agInit(params: any): void {
        this.params = params;
    }

    public invokeParentMethod() {
        console.log(this.params);
        this.params.context.componentParent.methodFromParent(
            `Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`
        );

    }

    public invokeShowMobileDetailMethod() {
        console.log(this.params);
        this.params.context.componentParent.invokeShowMobileDetailMethodFromParent(this.params.data);

    }

    refresh(): boolean {
        return false;
    }
}
