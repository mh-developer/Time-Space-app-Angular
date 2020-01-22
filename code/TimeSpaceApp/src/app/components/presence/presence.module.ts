import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { PresenceRoutingModule } from './presence-routing.module';
import * as fromPresence from '.';


@NgModule({
    declarations: [
        fromPresence.PresenceComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        PresenceRoutingModule,
        SharedModule
    ]
})
export class PresenceModule { }
