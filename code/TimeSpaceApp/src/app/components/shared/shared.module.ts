import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromShared from '.';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        fromShared.NavigationComponent,
        fromShared.EmployeeListComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        fromShared.NavigationComponent,
        fromShared.EmployeeListComponent
    ]
})
export class SharedModule { }
