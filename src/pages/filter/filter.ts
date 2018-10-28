import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
//import { Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
// import { googlemaps } from 'googlemaps';

// import { HotelPage } from '../hotel/hotel';
import { AllListPage } from '../all-list/all-list';
import { MessPage } from '../mess/mess';


@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
  providers: [
    Geolocation
  ]
})
 
export class FilterPage {

  tabBarElement: any;
  tabMapButton:any;
  public rangeValue: number = 0;
  public selectedValue = [];
  public priceFrom: number;
  public priceTo: number;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) { 
    
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.tabMapButton = document.querySelector('.fab.fab-md');
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
    this.tabMapButton.style.display = 'none';
  }
 
  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
    this.tabMapButton.style.display = 'flex';
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alert!',
      subTitle: 'Are you sure to clear Filter!',
      buttons: [
        {
          text: 'No',
          handler: data => { 
          }
        },
        {
          text: 'Yes',
          handler: data => {
            this.rangeValue = 0;
            this.selectedValue = [];
            this.priceFrom = null;
            this.priceTo = null; 
          }
        }
      ]
    });
    alert.present();
  }

  select(value:string){ 
    if(this.selectedValue.indexOf(value) > -1){
      return;
    }else{
      this.selectedValue.push(value);
    } 

  }
   
  removeSelectedValue(str:string){
    this.selectedValue.splice(this.selectedValue.indexOf(str), 1);
  }
    
  navigateToAllList(){
    this.navCtrl.push(AllListPage);  
    
  }

  applyFilter(){
	console.log("Range Value", this.rangeValue);
	console.log("Selected Value", this.selectedValue);
	console.log("From", this.priceFrom, "To", this.priceTo);
	this.navCtrl.push(MessPage,{
		rangeValue : this.rangeValue,
		selectedValue : this.selectedValue,
		priceFrom : this.priceFrom,
		priceTo : this.priceTo
	});  
    //this.navCtrl.push(AllListPage); 

  } 

  getRangeValue(){
    // console.log("change value", this.rangeValue);
  }
          
  }   

