import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'; 
import 'rxjs/add/operator/map'
//import { TabsPage } from '../tabs/tabs';
import { HotelService } from '../hotel/hotel.service';
import { HotelDetailPage } from '../hotel-detail/hotel-detail';
//import { HotelBillPage } from '../hotel-bill/hotel-bill';
import { AppService } from '../../app/app.service';
 
@Component({
  selector: 'page-hotel-home',
  templateUrl: 'hotel-home.html',
  providers: [ HotelService ]
})
export class HotelHomePage {
 
  public hotelData = {
  image_path:"",
  resto_name:"",
  dish_type:"",
  fav_dish:"",
  description:"",
  resto_address:"",
  city:"",
  state:"",
  open_time:"",
  close_time:"",
  services:"",
  owner_name:"",
  resto_contact:"",
  resto_email:"",
  web_url:""
  };
  public hotelId;
  public showBottomTabs = false;
  
	constructor(public navCtrl: NavController,
    private appService: AppService,
	public navParams: NavParams ) {
		this.hotelId = this.navParams.get('id');
		console.log(this.hotelId);

	}
	ngOnInit() {
		this.getHotelDetails(this.hotelId);
	}
  
    navigateToHotelDetail(){
        this.navCtrl.push(HotelDetailPage);
    }
/*    navigateToBill(){
        this.navCtrl.push(HotelBillPage,{"hotelName":this.hotelName})
    }
*/
	getHotelDetails(resto_id){
		this.appService.getHotelDetails(resto_id).subscribe(data => {
			console.log(JSON.stringify(data));
			this.hotelData = data[0];
		});
	};

}
