import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http'; 
import { LoadingController } from 'ionic-angular'
var baseUrl = "http://insideout.org.in/services/";

@Injectable()
export class AppService{

	public selectedLocation; 
	public loading;
	constructor(private http:Http, private loadingCtrl : LoadingController){ 
		this.presentLoadingDefault()
	} 	
	presentLoadingDefault() {
		this.loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});
	}
	showLoading() {
		//this.loading.present();
	};
	hideLoading(){
		//this.loading.dismiss();
	};
 
	getUserLogin(data){
		return this.http.get(baseUrl+"login.php?username="+data.username+"&password="+data.password).map(res => res.json());
	}
	
	registerUser(data){
		return this.http.get(baseUrl+"registration.php?username="+data.username+"&password="+data.password+"&email="+data.email+"&mobile="+data.mobile).map(res => res.json());
	}
	
	getCategories(){
		return this.http.get(baseUrl+"categories.php?token=1").map(res => res.json());
	}
	
	getHotelList(){
		return this.http.get(baseUrl+"hotel_list.php?token=1").map(res => res.json());
	}
	
	getMessList(){
		return this.http.get(baseUrl+"mess_list.php?token=1").map(res => res.json());
	}
	
	getFoodByCategory(catId){
		return this.http.get(baseUrl+"food_by_category.php?token=1&cat_id="+catId).map(res => res.json());
	}
	
	getMapData(data){
		return this.http.get(baseUrl+"map.php?longitude=88.66.66.6&latitude=12.3.33.55&token=1").map(res => res.json());
	}
	
	getHotelDetails(data){
		var dataFrom = "hotel_details"
		if(data.hotelType == "mess"){
			dataFrom = "mess_details"
		}else if(data.hotelType == "hotel"){
			dataFrom = "hotel_details"
		}
		return this.http.get(baseUrl+dataFrom+".php?token=1&hotel_id="+data.hotel_id).map(res => res.json());
	}
	
	foodDetail(data){
		return this.http.get(baseUrl+"food_detail.php?longitude=88.66.66.6&latitude=12.3.33.55&token=1&food_id=1ll").map(res => res.json());
	}
	
	getProfileData(data){
		return this.http.get(baseUrl+"/profile.php?token=1&user_id=1").map(res => res.json());
	}
	
    setData(data:any) {
      this.selectedLocation = data;  
    }

    getSelctedLoction(){
      return this.selectedLocation;
    }

}