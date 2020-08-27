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
import { ProductAddDialogComponent } from './product-add-dialog/product-add-dialog.component';
import { ProductCompareDialogComponent } from './product-compare-dialog/product-compare-dialog.component';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';
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
  public paginationPageSize;
  public showCompareOption = false;
  public filterText = '';
  //private columnTypes;
  public columnDefs = [
    { headerName: '', field: 'make', sortable: false, filter: true, checkboxSelection: true, width: 30 },
    { headerName: 'Brand Name', field: 'brandName', width: 70 },
    { headerName: 'Price', field: 'price', width: 50 },
    { headerName: 'Model', field: 'model', width: 70 }, // , editable: true
    { headerName: 'Quantity', field: 'quantity', width: 30 },
    {
      headerName: 'Action', field: 'id', width: 100,
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
      minWidth: 50,
      //minHeight: 500,
      filter: true,
      resizable: true
    };
    this.frameworkComponents = {
      actionRenderer: ActionRenderer,
    };
    this.paginationPageSize = 5;
    //console.log('Reading local json file'); console.log(MobileApiJson); //this.rowData= MobileApiJson;
    productService.getJSON().subscribe(res => {
      console.log(res);
      /*  res.forEach(element => { element.os = 'Android'; }); */
      this.rowData = res;
    });
  }

  ngOnInit() {
    console.log('Inside Home Component')
  }

  public onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
    //this.rowData= MobileApiJson;
    /*  this.http.get'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json')
       .subscribe(data => {  this.rowData = data;}); */
  }

  public onQuickFilterChanged() {
    this.gridApi.setQuickFilter(document.getElementById('quickFilter')['value']);
  }

  public onPageSizeChanged() {
    var value = (<HTMLInputElement>document.getElementById('page-size')).value;
    this.gridApi.paginationSetPageSize(Number(value));
  }

  public getSelectedRows() {
    //const selectedNodes = this.agGrid.api.getSelectedNodes();
    let selectedNodes = this.gridApi.getSelectedNodes(); // api.getSelectedRows():
    let selectedData = selectedNodes.map(node => node.data);
    alert(`Selected Nodes:\n${JSON.stringify(selectedData)}`);
    //const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    //alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
  onRowClicked(event: any) {
    console.log('row', event);
  }
  onCellClicked(event: any) {
    console.log('cell', event); // this.grid.api.getSelectedRows();
  }

  onSelectionChanged(event) {
    console.log(event); // verify that the method is fired upon selection
    var rowsSelected = this.gridApi.getSelectedRows().length;
    if (rowsSelected == 3)
      this.showCompareOption = true;
    else
      this.showCompareOption = false;
  }

  openCampareDialog() {
    if (!this.showCompareOption) {
      this.openMessageDialog("Please select 3 mobiles to compare");
      return;
    }
    let selectedNodes = this.gridApi.getSelectedNodes(); // api.getSelectedRows():
    let selectedData = selectedNodes.map(node => node.data);
    let transposedData = this.transpose(selectedData);
    //console.log('Transposed Data', transposedData)
    let finalData = this.getRightObj(transposedData);
    console.log('Table Data', finalData);
    const dialogRef = this.dialog.open(ProductCompareDialogComponent, {
      data: finalData
    });
    //this.openMessageDialog("Comparing 3 mobiles");
  }

  public getRightObj(data) {
    let res = [];
    for (let i = 0; i < Object.keys(data).length - 1; i++) {
      var newObj = {};
      var currColumn = this.getColumn(i);
      newObj['specs'] = currColumn;
      newObj["mobile1"] = data[currColumn][0];
      newObj["mobile2"] = data[currColumn][1];
      newObj["mobile3"] = data[currColumn][2];
      console.log("New Obj", newObj);
      res.push(newObj);
    }
    return res;
  }

  public getColumn(index) {
    var columns = ["brandName", "price", "model", "quantity", "os", "year"];
    return columns[index];
  }

  public transpose(data) {
    let result = {};
    for (let row of data) {
      for (let [key, value] of Object.entries(row)) {
        result[key] = result[key] || [];
        result[key].push(value);
      }
    }
    return result;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.width = "600px";
    //dialogConfig.height = "480px";
    dialogConfig.data = this.rowData;
    this.dialog.open(ProductDialogComponent, dialogConfig);
    //const dialogRef = this.dialog.open(DialogContentExampleDialog);
    /*dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });*/
  }
  // invoke method from renderer
  public methodFromParent(cell) {
    alert('Parent Component Method from ' + cell + '!');
  }

  public addCartMethodFromParent(cell){
    console.log("Add Cart Method invoked");
    const dialogRef = this.dialog.open(CartDialogComponent,{ data: cell });
    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data)
      });
  }

  public showMobileDetailFromParent(cell) {
    console.log("Show Mobile detail is invoked")
    //window.alert(JSON.stringify(cell));
    this.dialog.open(ProductDialogComponent, {
      data: cell
    });
  }

  public addMobile() {
    const dialogRef = this.dialog.open(ProductAddDialogComponent);
    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data)
        var newItems = [data];
        var res = this.gridApi.applyTransaction({ add: newItems });
        //this.rowData.push(data);
      });
  }

  public editMobileDetailFromParent(cell) {
    const dialogRef = this.dialog.open(ProductEditDialogComponent, {
      data: cell
    });
    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data)
        var tempData = this.rowData;
        var index = tempData.findIndex((obj => obj.id == data.id));
        /* tempData[index].brandName = data.brandName;
        tempData[index].price = data.price;
        tempData[index].model = data.model;
        tempData[index].quantity = data.quantity;
        tempData[index].os = data.os;
        console.log("After updating values", tempData[index]);
        this.rowData = tempData; */
        // updating row data
        var rowNode = this.gridApi.getRowNode(index);
        rowNode.setData(data);
      }
    );
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
