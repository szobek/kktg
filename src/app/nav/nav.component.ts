import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from '../auth/auth.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

    loggedSub: Subscription;
    logged: boolean;

    constructor(private authService: AuthService) {
        this.loggedSub = this.authService.logged.subscribe(
            bool => {
                this.logged = bool;
                console.log('a logged,', this.logged);
            },
            error => console.log('errror van', error)
        );
    }

    ngOnInit() {
    }

    ngOnDestroy() {

    }


}
