import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { AgGridAngular } from "ag-grid-angular";
//import { AllCommunityModules } from '@ag-grid-community/all-modules';
//import MobileApiJson from './../../assets/mobile-api.json'; -- read from locaol json
import { Observable } from 'rxjs';
import { ProductService } from './services/product.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { ActionRenderer } from './cell-renderer/action-renderer.component';
import { ProductEditDialogComponent } from './product-edit-dialog/product-edit-dialog.component';
import { MessageDialogComponent } from './message-dialog/message-dialog';
//import '@ag-grid-community/core/dist/styles/ag-grid.css';
//import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';
@Component({
  selector: 'app-home',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
@Injectable()
export class ProductComponent implements OnInit {
  // @ViewChild('agGrid',{static: false}) agGrid: AgGridAngular;
  public gridApi;
  public gridColumnApi;
  public context;
  //public modules: any[] = AllCommunityModules;
  public defaultColDef;
  public frameworkComponents;
  public columnDefs = [
    { headerName: '', field: 'make', sortable: true, filter: true, checkboxSelection: true, width: 100 },
    { headerName: 'Brand Name', field: 'brandName', width: 100 },
    { headerName: 'Price', field: 'price', width: 100 },
    { headerName: 'Model', field: 'model', width: 100 }, // , editable: true
    { headerName: 'Quantity', field: 'quantity', width: 100 },
    {
      headerName: 'Action', field: 'id', width: 180,
      cellRenderer: 'actionRenderer', colId: 'params'
    }
  ];
  public rowData;

  /*  [
    { brandName: 'Redmi', price: 13999, model: 'Note 9 Pro', quantity: 10 },
    { brandName: 'One Plus', price: 42999, model: 'OP 8', quantity: 30 },
    { brandName: 'Realme', price: 15999, model: 'Realme 6', quantity: 7 },
    { brandName: 'Samsung', price: 14999, model: 'M30s', quantity: 20 },
  ]; */
  public style = {
    width: '100%',
    height: '100%',
    flex: '1 1 auto'
  };

  constructor(public productService: ProductService,
    public dialog: MatDialog) {
    this.context = { componentParent: this };
    this.defaultColDef = {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      resizable: true
    };
    this.frameworkComponents = {
      actionRenderer: ActionRenderer,
    };
    //console.log('Reading local json file'); console.log(MobileApiJson); //this.rowData= MobileApiJson;
    productService.getJSON().subscribe(res => {
      console.log(res);
      res.forEach(element => {
        element.os = 'Android';
      });
      this.rowData = res;
    });
  }

  ngOnInit() {
    console.log('Inside Home Component')
  }

  public onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    //this.rowData= MobileApiJson;

    /*  this.http
       .get(
         'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'
       )
       .subscribe(data => {
         this.rowData = data;
       }); */
  }

  public onQuickFilterChanged() {
    this.gridApi.setQuickFilter(document.getElementById('quickFilter')['value']);
  }

  public getSelectedRows() {
    //const selectedNodes = this.agGrid.api.getSelectedNodes();
    let selectedNodes = this.gridApi.getSelectedNodes(); // api.getSelectedRows():
    let selectedData = selectedNodes.map(node => node.data);
    alert(`Selected Nodes:\n${JSON.stringify(selectedData)}`);
    //const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    //alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  openDialog() {
    this.dialog.open(ProductDialogComponent, this.rowData);
    //const dialogRef = this.dialog.open(DialogContentExampleDialog);
    /*dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });*/
  }
  // invoke method from renderer
  public methodFromParent(cell) {
    alert('Parent Component Method from ' + cell + '!');
  }

  public showMobileDetailFromParent(cell) {
    console.log("Show Mobile detail is invoked")
    //window.alert(JSON.stringify(cell));
    this.dialog.open(ProductDialogComponent, {
      data: cell
    });
  }

  public editMobileDetailFromParent(cell) {
    this.dialog.open(ProductEditDialogComponent, {
      data: cell
    });
  }

  public deleteMobileDetailFromParent(cell) {
    console.log(cell);
    this.rowData = this.rowData.filter(function (element) { return element.id != cell.id; });
    this.openMessageDialog(cell.brandName + " " + cell.model + " Mobile has been deleted");
    /*  this.dialog.open(ProductDialogComponent, {
       data: cell
     }); */
  }

  openMessageDialog(message) {
    let data = { message };
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.disableClose = true;
    //dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(MessageDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog { }