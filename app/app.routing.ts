import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./admin/admin.component";


const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'admin', component: AdminComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '/login' }
];

export const routing  = RouterModule.forRoot(appRoutes);