import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { AuthGuard } from "../auth/auth.guard";
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
    {
        path: '', component: NavbarComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'products', loadChildren: 'src/app/product/product.module#ProductModule' }
            //{ path: 'login', component: LoginComponent }
            /*  { path: 'members', loadChildren: 'app/members.module#MembersModule' } */
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NavbarRoutingModule { }
