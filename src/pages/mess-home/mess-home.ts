import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'; 
// import { HTTP } from '@ionic-native/http';
import 'rxjs/add/operator/map'  
import { Headers, Http, Response } from '@angular/http'; 

import { MessService } from '../mess/mess.service';
import { MessDetailPage } from '../mess-detail/mess-detail';
 
@Component({
  selector: 'page-mess-home',
  templateUrl: 'mess-home.html',
  providers: [ MessService ]
})
export class MessHomePage {

  public displayData;
  public hotelName;
  public hotelRating;
  public hotelAddress;
  public hotelNameInitial;
  hotelId: any;
    constructor(public navCtrl: NavController,
                private http:Http,
                // private homePage: HomePage,
                private messService: MessService,
                public navParams: NavParams) {
  
          this.hotelId = this.navParams.get('id');
          console.log(this.hotelId);
          
          this.messService.getMessData() .subscribe(data => {
              this.displayData = data;
          // this.displayData = this.homePage.displayData;
              console.log('data', this.displayData)
  
              for(let key in  this.displayData){
                 
                  if(this.hotelId == this.displayData[key]['resto_id'])
                  {
                      this.hotelName=this.displayData[key]['resto_name'];
  
                      this.hotelNameInitial = this.hotelName[0]; 
  
                      this.hotelRating=this.displayData[key]['rating'];
                      this.hotelAddress=this.displayData[key]['resto_address'];
                      // this.hotelData.hotelName=this.displayData[key]['resto_name'];
                   
                  }
              }
            });
    }
  
    navigateToHotelDetail(){
        this.navCtrl.push(MessDetailPage,);
    }
  

}
