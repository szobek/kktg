import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Observable, of, Subscription} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    loginSub: Subscription;
    loginForm: FormGroup    ;

    constructor(private authService: AuthService, private fb: FormBuilder) {
        this.loginSub = this.authService.logged.subscribe(
            (bool: boolean) => {
                if (bool) {
                    localStorage.user = JSON.stringify({
                        name: 'Kunszt Norbert 12'
                    });
                } else {
                    localStorage.clear();
                }
            }
        );
        this.loginForm = this.fb.group({
            email: new FormControl('asd@asd.asd', [Validators.required]),
            password: new FormControl('123456789', [Validators.required, Validators.minLength(8)]),
        });

    }

    ngOnInit() {

    }

    ngOnDestroy(): void {
        this.loginSub.unsubscribe();
    }

    saveLoginForm() {
        const  bool = this.loginForm.getRawValue().email === 'asd@asd.asd'
        console.log('logged a savetől', bool)
        this.authService.logged.next(bool);
    }

    readForm() {

    }


}
