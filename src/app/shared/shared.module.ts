import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule

    ],
    exports: [
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [],
    providers: []
})
export class SharedModule {
}
