import { EmployeeListComponent } from './components/shared/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TokenGuard } from './services';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import(`./components`).then(m => m.SettingsModule)
    },
    {
        path: 'settings',
        loadChildren: () => import(`./components`).then(m => m.SettingsModule)
    },
    {
        path: 'users',
        canActivate: [TokenGuard],
        loadChildren: () => import(`./components`).then(m => m.UsersModule)
    },
    {
        path: 'presence',
        canActivate: [TokenGuard],
        loadChildren: () => import(`./components`).then(m => m.PresenceModule)
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
