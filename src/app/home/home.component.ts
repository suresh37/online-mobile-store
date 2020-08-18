import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    columnDefs = [
        { headerName: 'Brand Name', field: 'brandName' },
        { headerName: 'Price', field: 'price' },
        { headerName: 'Model', field: 'model' }, // , editable: true
        { headerName: 'Quantity', field: 'quantity' }
    ];

    rowData = [
        { brandName: 'Redmi', price: 13999, model: 'Note 9 Pro', quantity: 10 },
        { brandName: 'One Plus', price: 42999, model: 'OP 8', quantity: 30 },
        { brandName: 'Realme', price: 15999, model: 'Realme 6', quantity: 7 },
        { brandName: 'Samsung', price: 14999, model: 'M30s', quantity: 20 },
    ];

    constructor() { }

    ngOnInit() {
        console.log('Inside Home Component')
    }

}
