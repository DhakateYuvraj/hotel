import { Component } from '@angular/core'; 
import { NavController, App, NavParams, ModalController } from 'ionic-angular'; 

import { HotelPage } from '../hotel/hotel';
import { MapPage } from '../map/map';
import { MessPage } from '../mess/mess';  

@Component({
  templateUrl: 'tabs.html' 
})
export class TabsPage {

  tab1Root = MessPage;
  tab2Root = MapPage;
  tab3Root = "";

  public showBottomTabs = true;

  constructor(public navCtrl:NavController) { 
  }  

  ionViewDidLoad( ) { 

  }

  navigateToMap(){
    this.navCtrl.push(MapPage);
    }

}
