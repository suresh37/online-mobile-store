import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
//import { ProductComponent } from './../product/product.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule
            ],
    declarations: [
        HomeComponent
    ],
    exports: [HomeComponent]
})
export class HomeModule { }
