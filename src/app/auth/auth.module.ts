import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LoginComponent } from '../login/login.component';
import { SharedModule } from './../shared/shared.module';
//import { MessageDialogComponent } from './../product/message-dialog/message-dialog';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    declarations: [
        LoginComponent,
        //MessageDialogComponent
    ],
    providers: [
        AuthGuard,
        AuthService
    ],
   // entryComponents: [MessageDialogComponent]
})
export class AuthModule { }
