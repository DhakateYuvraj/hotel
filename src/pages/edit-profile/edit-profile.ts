import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

 
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
  providers:[ Camera ]
})

export class EditProfilePage {
  
  public id;
  public base64Image;
  public user = {}; 
  public profileImage;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public camera:Camera ){
                   

      this.profileImage = this.user['profileImg'];
      if(this.profileImage == "NULL" || this.profileImage == "" || this.profileImage == undefined){
        this.profileImage = "assets/imgs/dummyProfileImage.png";
      }else{
        this.profileImage = this.user['profileImg'];
      }
       console.log(this.user);
    }
    
    
    updateProfile(){
  
    }
  
    // ============================img=================//

    accessGallery(){
      this.camera.getPicture({
        sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
        destinationType: this.camera.DestinationType.DATA_URL
       }).then((imageData) => {
         this.base64Image = 'data:image/jpeg;base64,'+imageData;
        }, (err) => {
         console.log(err);
       });
    }
}