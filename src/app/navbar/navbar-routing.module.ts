import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { AuthGuard } from "../auth/auth.guard";

const routes: Routes = [
    {
        path: '', component: NavbarComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'home', loadChildren: 'src/app/home/home.module#HomeModule' },
            /*  { path: 'members', loadChildren: 'app/members.module#MembersModule' } */
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NavbarRoutingModule { }
