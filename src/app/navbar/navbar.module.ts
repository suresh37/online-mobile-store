import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { NavbarRoutingModule } from './navbar-routing.module';
import { SharedModule } from './../shared/shared.module';
//import { ProductComponent } from './../product/product.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NavbarRoutingModule
            ],
    declarations: [
        NavbarComponent
    ]
})
export class NavbarModule { }
