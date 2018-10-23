import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Observable, of, Subscription} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
                        name: 'Kunszt Norbert'
                    });
                } else {
                    localStorage.clear();
                }
            }
        );
        this.loginForm = this.fb.group({
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        })
        console.warn(this.loginForm);

    }

    ngOnInit() {

    }

    ngOnDestroy(): void {
        this.loginSub.unsubscribe();
    }

    saveLoginForm() {
        if (this.loginForm.getRawValue().email === 'asd@asd.asd') {
            this.authService.logged.next(true);
        } else {
            this.authService.logged.next(false);
        }
    }

    readForm() {
        console.log(this.loginForm)
    }


}
