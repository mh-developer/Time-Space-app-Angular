import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import * as fromUsers from '.';


@NgModule({
    declarations: [
        fromUsers.UsersComponent,
        fromUsers.UsersSearchComponent,
        fromUsers.UserAddComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        UsersRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class UsersModule { }
