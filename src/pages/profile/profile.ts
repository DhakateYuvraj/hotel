import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
 
// import { HotelService } from '../hotel/hotel.service';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { HotelPage } from '../hotel/hotel';
 
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers:[ ]
})
export class ProfilePage {

  public loginUserData={};
  public profileImage;
  constructor(public navCtrl: NavController ) {
    
        // this.loginUserData = this.homeService.getLoginUser();
     
        this.profileImage = this.loginUserData['profileImg'];
        if(this.profileImage == "NULL" || this.profileImage == "" || this.profileImage == undefined){
          this.profileImage = "assets/imgs/dummyProfileImage.png";
        }else{
          this.profileImage = this.loginUserData['profileImg'];
        }
         console.log(this.loginUserData); 
    
  } 

  goBack(){
    this.navCtrl.push(HotelPage);
  }

  navigateToEditProfile(){
    this.navCtrl.push(EditProfilePage);
  }

}
