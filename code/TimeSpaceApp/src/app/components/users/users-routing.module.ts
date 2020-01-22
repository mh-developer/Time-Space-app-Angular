import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromUsers from '.';


const routes: Routes = [
    {
        path: '',
        component: fromUsers.UsersComponent
    },
    {
        path: 'add',
        component: fromUsers.UserAddComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
