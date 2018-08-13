import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,App} from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { AllListPage } from '../all-list/all-list';
@IonicPage()
@Component({
  selector: 'page-profile-menu',
  templateUrl: 'profile-menu.html',
})
export class ProfileMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public app:App) {
  }
  close() {
    this.viewCtrl.dismiss();
  }

  logout(){
    
        const root = this.app.getRootNav();
        root.popToRoot();
      }
  navigateToprofile(){
  this.navCtrl.push(ProfilePage);
  }

  navigateToList(){
    this.navCtrl.push(AllListPage);
  }
}
