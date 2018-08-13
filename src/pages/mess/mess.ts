import { Component } from '@angular/core';
import { NavController, App, NavParams, ModalController } from 'ionic-angular';

import { MessService } from './mess.service';
import { ListPage } from '../list/list';
import { FilterPage } from '../filter/filter';
import { AllListPage } from '../all-list/all-list';
import { MessHomePage } from '../mess-home/mess-home';
import { AppService } from '../../app/app.service';
import { SearchBarPage } from '../search-bar/search-bar'; 
 
@Component({
  selector: 'page-mess',
  templateUrl: 'mess.html',
  providers:[ MessService ]
})
export class MessPage {
  public displayData; 
  public data; 
  public hotelImg;
  public selectedLocation;
  public searchbar;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public app: App,
              public hotelService: MessService,
              public modalCtrl: ModalController,
              private appService: AppService ) {
    this.getMessData();
  }

  ngOnInit(){ 
    this.getSelctedLoction();
  }
  getSelctedLoction() {
    this.selectedLocation = this.appService.getSelctedLoction(); 
    // console.log(" selectedLocation",this.selectedLocation);
  return this.selectedLocation;
  } 

  getMessData(){
    this.hotelService.getMessData()
      .subscribe(data => {
         this.displayData = data; 
    });
    
  }

  search(){  
    this.searchbar = this.modalCtrl.create(SearchBarPage);
    this.searchbar.present();
  } 

  logout(){

    const root = this.app.getRootNav();
    root.popToRoot();
  }
 
    navigateToHotel(id: number)
    {
      this.navCtrl.push(MessHomePage, {  'id': id });
    }  

  nextPage(){
    this.navCtrl.push(ListPage);
  }

  filterPage(){
    this.navCtrl.push(FilterPage);
  }

  navigateToAllList(){
    this.navCtrl.push(AllListPage);
  } 

}
