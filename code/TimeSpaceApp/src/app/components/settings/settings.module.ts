import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import * as fromSettings from '.';


@NgModule({
    declarations: [
        fromSettings.SettingsComponent
    ],
    imports: [
        CommonModule,
        SettingsRoutingModule
    ]
})
export class SettingsModule { }
