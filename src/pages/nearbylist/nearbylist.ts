import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationsProvider } from '../../providers/locations/locations';

/**
 * Generated class for the NearbylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nearbylist',
  templateUrl: 'nearbylist.html',
})
export class NearbylistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public locations: LocationsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NearbylistPage');
  }

}
