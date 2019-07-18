import { Component } from '@angular/core';
import { AuthService } from '../_shared/services/auth.service';
import { PopApiService } from '../_shared/services/pop-api.service';
import { timer } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  logged;
  constructor(private auth$ : AuthService, private pop$: PopApiService, private navCtrl : NavController) {
    this.auth$.isLogged.subscribe((val) => {
      this.logged = val;
    });
  }
  
  login(){
    this.pop$.showToast('Log in sucessfull');
    this.auth$.setisLoggedIn(1);
    timer(2000).subscribe(() => {
      this.navCtrl.navigateForward('/menu/list');
    });
  }

}
