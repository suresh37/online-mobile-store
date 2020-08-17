import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { NavbarRoutingModule } from './navbar-routing.module';

@NgModule({
    imports: [
        CommonModule,
        NavbarRoutingModule
    ],
    declarations: [
        NavbarComponent
    ]
})
export class NavbarModule { }
