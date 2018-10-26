import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
    providers: []
})
export class SharedModule {
}
