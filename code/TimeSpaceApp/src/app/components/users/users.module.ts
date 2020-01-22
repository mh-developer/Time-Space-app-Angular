import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import * as fromUsers from '.';


@NgModule({
    declarations: [
        fromUsers.UsersComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule
    ]
})
export class UsersModule { }
