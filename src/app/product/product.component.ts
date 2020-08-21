import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { AgGridAngular } from "ag-grid-angular";
//import MobileApiJson from './../../assets/mobile-api.json'; -- read from locaol json
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
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
  public defaultColDef;
  public columnDefs = [
    { headerName: '', field: 'make', sortable: true, filter: true, checkboxSelection: true, width: 100 },
    { headerName: 'Brand Name', field: 'brandName', width: 100 },
    { headerName: 'Price', field: 'price', width: 100 },
    { headerName: 'Model', field: 'model', width: 100 }, // , editable: true
    { headerName: 'Quantity', field: 'quantity', width: 100 }
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

  constructor(public productService: ProductService) {
    this.defaultColDef = {
      flex: 1,
      minWidth: 100,
      resizable: true
    };
    //console.log('Reading local json file'); console.log(MobileApiJson); //this.rowData= MobileApiJson;
    productService.getJSON().subscribe(res => {
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

}
