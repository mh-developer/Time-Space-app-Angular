import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TokenGuard } from './services';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/settings',
        pathMatch: 'full'
    },
    {
        path: 'settings',
        loadChildren: './components/settings/settings.module#SettingsModule',
        // loadChildren: () => import(`./components`).then(m => m.SettingsModule),
    },
    {
        path: 'users',
        canActivate: [TokenGuard],
        loadChildren: './components/users/users.module#UsersModule',
        // loadChildren: () => import(`./components/users/users.module`).then(m => m.UsersModule),
    },
    {
        path: 'presence',
        canActivate: [TokenGuard],
        loadChildren: './components/presence/presence.module#PresenceModule',
        // loadChildren: () => import(`./components/presence/presence.module`).then(m => m.PresenceModule),
    },
    {
        path: '**',
        redirectTo: '/settings',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
