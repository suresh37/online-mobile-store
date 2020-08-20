import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from "ag-grid-angular";
// import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 // @ViewChild('agGrid',{static: true}) agGrid: AgGridAngular;
  private gridApi;
  private gridColumnApi;
  private defaultColDef;
  private columnDefs = [
         {headerName: 'make', field: 'make', sortable: true, filter: true, checkboxSelection: true },
        { headerName: 'Brand Name', field: 'brandName' },
        { headerName: 'Price', field: 'price' },
        { headerName: 'Model', field: 'model' }, // , editable: true
        { headerName: 'Quantity', field: 'quantity' }
    ];

   private rowData = [
        { brandName: 'Redmi', price: 13999, model: 'Note 9 Pro', quantity: 10 },
        { brandName: 'One Plus', price: 42999, model: 'OP 8', quantity: 30 },
        { brandName: 'Realme', price: 15999, model: 'Realme 6', quantity: 7 },
        { brandName: 'Samsung', price: 14999, model: 'M30s', quantity: 20 },
    ];

    constructor() { 
      this.defaultColDef = {
      flex: 1,
      minWidth: 100,
    };
    }

    ngOnInit() {
        console.log('Inside Home Component')
    }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.rowData = [
        { brandName: 'Redmi', price: 13999, model: 'Note 9 Pro', quantity: 10 },
        { brandName: 'One Plus', price: 42999, model: 'OP 8', quantity: 30 },
        { brandName: 'Realme', price: 15999, model: 'Realme 6', quantity: 7 },
        { brandName: 'Samsung', price: 14999, model: 'M30s', quantity: 20 },
    ];

   /*  this.http
      .get(
        'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'
      )
      .subscribe(data => {
        this.rowData = data;
      }); */
  }

    getSelectedRows() {
        //const selectedNodes = this.agGrid.api.getSelectedNodes();
        const selectedNodes = this.gridApi.getSelectedNodes();
        let selectedData = selectedNodes.map(node => node.data);
        alert(`Selected Nodes:\n${JSON.stringify(selectedData)}`);
        //const selectedData = selectedNodes.map( node => node.data );
        //const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
        //alert(`Selected nodes: ${selectedDataStringPresentation}`);

       /*  let selectedNodes = this.gridApi.getSelectedNodes();
        let selectedData = selectedNodes.map(node => node.data);
        alert(`Selected Nodes:\n${JSON.stringify(selectedData)}`);
        return selectedData; */

    }

}
