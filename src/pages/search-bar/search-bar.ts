import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import 'rxjs/add/operator/debounceTime'; 
//import { AllListPage } from '../all-list/all-list';
import { HotelService } from '../hotel/hotel.service';
import { HotelHomePage } from '../hotel-home/hotel-home';
 
@Component({
  selector: 'page-search-bar',
  templateUrl: 'search-bar.html',
  providers: [ HotelService ]
})
export class SearchBarPage {
 
  searchControl: FormControl;
  searchTerm: string = ''; 
  items: any;
  searching: any = false;
  public searchlist:any;
  public filteredItems:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public viewCtrl: ViewController,
              public hotelService: HotelService) {

    this.searchControl = new FormControl(); 

    this.getHotelData();

  } 

  ionViewDidLoad() {  
    
      this.filterItems();
        this.searchControl.valueChanges.debounceTime(300).subscribe(search => { 

            // this.items = this.searchlist; 
          this.filterItems();
        });


    }

    getHotelData() {
      this.hotelService.getHotelData()
        .subscribe(data => {
          this.items = data;
          console.log(this.items);
        });
  
    }

    filterItems() {  

      let str = this.searchTerm;

       if (str && str.trim() != '') {
        this.filteredItems = this.items.filter((item) => {
          if (item.resto_id.indexOf(str) >= 0 ||
          item.resto_name.indexOf(str) >= 0 ||
          item.category.indexOf(str) >= 0 ||
          item.resto_address.indexOf(str) >= 0 ||
          item.facility.indexOf(str) >= 0 ) {
        return true
      }
      return false 
        }) 
      } 

    }


  cancelSearch(){ 
    this.viewCtrl.dismiss();
  }

  navigateToDetail(id:number){
    this.navCtrl.push(HotelHomePage, { 'id': id });
  } 
  
}
