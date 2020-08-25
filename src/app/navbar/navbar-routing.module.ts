import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { AuthGuard } from "../auth/auth.guard";
import { CartComponent } from '../cart/cart.component';
//import { LoginComponent } from '../login/login.component';

const routes: Routes = [
    {
        path: '', component: NavbarComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'home', loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule) },
            { path: 'products', loadChildren: () => import('src/app/product/product.module').then(m => m.ProductModule) },
            { path: 'contact', loadChildren: () => import('src/app/contact/contact.module').then(m => m.ContactModule) },
            { path: 'cart', component: CartComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' }

            //{ path: 'login', component: LoginComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NavbarRoutingModule { }
