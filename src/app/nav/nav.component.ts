import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

    logged: boolean;

    constructor(private authService: AuthService) {
        this.authService.logged.subscribe( (res: any) => {
            this.logged = res;
        });
    }

    ngOnInit() {
    }


    ngOnDestroy(): void {

    }


}
