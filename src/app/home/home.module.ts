import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        AgGridModule.withComponents([])
    ],
    declarations: [
        HomeComponent
    ],
    exports: [HomeComponent]
})
export class HomeModule { }
