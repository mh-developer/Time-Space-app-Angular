import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresenceRoutingModule } from './presence-routing.module';
import * as fromPresence from '.';


@NgModule({
    declarations: [
        fromPresence.PresenceComponent
    ],
    imports: [
        CommonModule,
        PresenceRoutingModule
    ]
})
export class PresenceModule { }
