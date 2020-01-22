import { EmployeeListComponent } from './components/shared/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        // loadChildren: () => import(`./components`).then(m => m.UsersComponent)
        component: EmployeeListComponent
    },
    {
        path: 'settings',
        loadChildren: () => import(`./components`).then(m => m.SettingsModule)
    },
    {
        path: 'users',
        loadChildren: () => import(`./components`).then(m => m.UsersModule)
    },
    {
        path: 'presence',
        loadChildren: () => import(`./components`).then(m => m.PresenceModule)
    },
    // {
    //     path: '**',
    //     loadChildren: () => import(`./components`).then(m => m.UsersComponent)
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
