import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-hotel-bill',
  templateUrl: 'hotel-bill.html',
})
export class HotelBillPage {
public selectedName;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedName=this.navParams.get('hotelName');
  }



}
