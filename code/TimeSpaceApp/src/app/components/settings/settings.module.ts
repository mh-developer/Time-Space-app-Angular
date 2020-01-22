import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SettingsRoutingModule } from './settings-routing.module';
import * as fromSettings from '.';


@NgModule({
    declarations: [
        fromSettings.SettingsComponent
    ],
    imports: [
        CommonModule,
        SettingsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class SettingsModule { }
