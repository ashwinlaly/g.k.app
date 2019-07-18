import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = new BehaviorSubject(0);

  constructor() { }

  public setisLoggedIn(data){
    this.isLogged.next(data);
  }

}
