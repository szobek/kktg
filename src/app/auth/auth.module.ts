import {NgModule, Provider} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {SharedModule} from '../shared/shared.module';
import {AuthService} from './auth.service';


@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule
    ],
    declarations: [LoginComponent, LogoutComponent],
    providers: []

})
export class AuthModule {
}
