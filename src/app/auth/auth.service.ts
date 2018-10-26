import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    logged: BehaviorSubject<boolean> = new BehaviorSubject(false);
    loginSub: Subscription;
    public users$: Observable<any[]>;
    private users: Array<any> = []
    constructor(private client: HttpClient) {
        this.loginSub = this.logged.subscribe(
            (bool: boolean) => {
                if (bool) {
                    this.getUsers();
                }
            }
        );
    }

    getUsers() {
        this.client.get('https://jsonplaceholder.typicode.com/users')
            .subscribe(
            (res) => {
                console.log(res);
            }
        );
    }

}
