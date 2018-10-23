import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {SharedModule} from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent],

})
export class AppModule {
}
