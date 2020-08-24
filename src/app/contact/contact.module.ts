import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
//import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    imports: [
      CommonModule,
      ContactRoutingModule,
      SharedModule ],
    declarations: [
        ContactComponent
    ],
    exports: [ContactComponent]
})
export class ContactModule { }
