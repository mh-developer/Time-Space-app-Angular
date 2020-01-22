import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import * as fromServices from '.';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: fromServices.HttpTokenInterceptor, multi: true },
    ],
})
export class ServicesModule { }
