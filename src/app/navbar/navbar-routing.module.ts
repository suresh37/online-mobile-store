import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { AuthGuard } from "../auth/auth.guard";
//import { LoginComponent } from '../login/login.component';

const routes: Routes = [
    {
        path: '', component: NavbarComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'home', loadChildren: 'src/app/home/home.module#HomeModule' },
            { path: 'products', loadChildren: 'src/app/product/product.module#ProductModule' },
            { path: '',  redirectTo: '/home', pathMatch: 'full'  }
            //{ path: 'login', component: LoginComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NavbarRoutingModule { }
