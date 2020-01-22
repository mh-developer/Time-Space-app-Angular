import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromPresence from '.';


const routes: Routes = [
    {
        path: '',
        component: fromPresence.PresenceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PresenceRoutingModule { }
