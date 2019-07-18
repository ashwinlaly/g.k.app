import { Component } from '@angular/core';
import { AuthService } from '../_shared/auth.service';
import { PopApiService } from '../_shared/pop-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  logged;
  constructor(private auth$ : AuthService, private pop$: PopApiService) {
    this.auth$.isLogged.subscribe((val) => {
      this.logged = val;
    });
  }
  
  login(){
    this.pop$.showToast('Log in sucessfull');
    this.auth$.setisLoggedIn(1);
  }

}
