import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
 
@Component({
  selector: 'page-hotel-detail',
  templateUrl: 'hotel-detail.html',
})
export class HotelDetailPage {

  public information: any[];
  public localData;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http ) {

    this.localData = http.get('assets/information.json').map(res => res.json().items);
    this.localData.subscribe(data => {
      this.information = data;
    })

  }

  goBackPage(){
    this.navCtrl.pop();
  }
 
  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }

}
