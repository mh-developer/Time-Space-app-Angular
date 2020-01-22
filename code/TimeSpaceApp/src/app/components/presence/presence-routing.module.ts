import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromPresence from '.';
import { TokenGuard } from '../../services';


const routes: Routes = [
    {
        path: '',
        canActivate: [TokenGuard],
        component: fromPresence.PresenceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PresenceRoutingModule { }
