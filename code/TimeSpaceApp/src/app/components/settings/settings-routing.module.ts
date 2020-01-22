import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromSettings from '.';


const routes: Routes = [
    {
        path: '',
        component: fromSettings.SettingsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
