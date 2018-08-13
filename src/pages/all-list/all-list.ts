import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'; 
import { HotelService } from '../hotel/hotel.service';
import { HotelHomePage } from '../hotel-home/hotel-home';
import { AppService } from '../../app/app.service';

@Component({
  selector: 'page-all-list',
  templateUrl: 'all-list.html'
})
export class AllListPage {
	public categoryData =[{
		hotel_id:"",
		food_id:'',
		image_path:'',
		resto_name:'',
		food_name:'',
		description:''  
	}];
	public cat_id;
	constructor(public navCtrl: NavController, public navParams: NavParams,private appService: AppService ) {
		this.cat_id = this.navParams.get('cat_id');
		console.log(this.cat_id);
	}
	ngOnInit() {
		this.getDetails(this.cat_id);
	}

	getDetails(cat_id){
		this.appService.getFoodByCategory(cat_id).subscribe(data => {
			console.log(JSON.stringify(data));
			this.categoryData = data;
		});
	};
	navigateToHotel(hotel_id) {
		this.navCtrl.push(HotelHomePage, { 'id': hotel_id });
	}


}
