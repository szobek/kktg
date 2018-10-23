import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from '../auth/auth.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule

    ],
    exports: [
        ReactiveFormsModule
    ],
    declarations: [],
    providers: [AuthService]
})
export class SharedModule {
}
