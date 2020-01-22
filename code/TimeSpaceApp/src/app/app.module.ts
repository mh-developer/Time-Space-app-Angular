import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from './services/services.module';
import { AppComponent } from './app.component';
import * as fromComponents from './components';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        fromComponents.SharedModule,
        ServicesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
