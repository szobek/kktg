import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }
}
