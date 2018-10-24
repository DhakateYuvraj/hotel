import { Component, OnInit, ViewChild, } from '@angular/core';
import { NavController, App, NavParams, ModalController, MenuController,Content} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { PopoverController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';


import { MessService } from '../mess/mess.service';
import { ListPage } from '../list/list';
import { FilterPage } from '../filter/filter';
import { AllListPage } from '../all-list/all-list';
import { HotelHomePage } from '../hotel-home/hotel-home';
import { SearchBarPage } from '../search-bar/search-bar';
import { AppService } from '../../app/app.service';
import { ProfileMenuPage } from '../profile-menu/profile-menu';
 
@Component({
  selector: 'page-mess',
  templateUrl: 'mess.html',
  providers:[ MessService ]
})
export class MessPage implements OnInit {
  public showSelectBtn = true;
  public showSelectedAddrs = false;
  public selectedLocation;
  public searchbar;
  public hotelData;
  public categoriesData;
  public data;
  public hotelImg;
  public currentLocation;


  @ViewChild("contentRef") contentHandle: Content;
  
   public items = [];
   private tabBarHeight;
   private topOrBottom:string;
   private contentBox;

  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public MessService: MessService,
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController,
    public menu: MenuController,
    private appService: AppService,
    public loadingCtrl: LoadingController,
    private geolocation: Geolocation,
    public http: Http

  ) {
 
    this.geolocation.getCurrentPosition().then((resp) => {
      var lat = resp.coords.latitude;
      var long = resp.coords.longitude;
      console.log("lat", lat);
      console.log("Long", long);
      this.http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long + '&sensor=true')
        .map(res => res.json()).subscribe(data => {
          //var address = data.results[0];
          //this.currentLocation = address.formatted_address;
          //console.log("city", address.address_components[1].short_name);
        });
    }).catch((error) => {
      // console.log('Error getting location', error);
    });

  }

  ngOnInit() {
    this.getSelctedLoction();
	this.getCategories();
	this.getHotelList();
  }

  doRefresh(refresher) {  
    //set refresher data here
    setTimeout(() => { 
      refresher.complete();
    }, 1500);
  }

  getSelctedLoction() {
    this.selectedLocation = this.appService.getSelctedLoction();
    // console.log(" selectedLocation",this.selectedLocation);
    return this.selectedLocation;
  }

  logout() {

    const root = this.app.getRootNav();
    root.popToRoot();
  }

  nextPage() {

    this.navCtrl.push(ListPage);
  }

  filterPage() {
    this.navCtrl.push(FilterPage);
  }

  navigateToAllList(cat_id) {
    this.navCtrl.push(AllListPage,{'cat_id':cat_id});
  }

  search() {
    this.searchbar = this.modalCtrl.create(SearchBarPage);
    this.searchbar.present();
  }

  openPopover(myEvent) {
    let popover = this.popoverCtrl.create(ProfileMenuPage);
    popover.present({
      ev: myEvent
    });

  }
 ionViewDidEnter() {
    this.topOrBottom=this.contentHandle._tabsPlacement;
    this.contentBox=document.querySelector(".scroll-content")['style'];
  
    if (this.topOrBottom == "top") {
      this.tabBarHeight = this.contentBox.marginTop;
    } else if (this.topOrBottom == "bottom") {
      this.tabBarHeight = this.contentBox.marginBottom;
    }
  }
 
  scrollingFun(e) {
    if (e.scrollTop > this.contentHandle.getContentDimensions().contentHeight) {
      document.querySelector(".tabbar")['style'].display = 'none';
      if (this.topOrBottom == "top") {
        this.contentBox.marginTop = 0;
      } else if (this.topOrBottom == "bottom") {
        this.contentBox.marginBottom = 0;
      }
 
    } else {
      document.querySelector(".tabbar")['style'].display = 'flex';
      if (this.topOrBottom == "top") {
        this.contentBox.marginTop = this.tabBarHeight;
      } else if (this.topOrBottom == "bottom") {
        this.contentBox.marginBottom = this.tabBarHeight;
      }
 
    }//if else
  }//scrolling
  
  
  

	getCategories(){
		this.appService.showLoading();
		this.appService.getCategories().subscribe(data => {
			//this.appService.hideLoading();
			this.categoriesData = data
		});
	};
	getHotelList(){
	let newData = [];
		this.appService.getMessList().subscribe(data => {
			//console.log(JSON.stringify(data));
			let currTime = new Date(new Date().getTime() + 4*60*60*1000).toLocaleTimeString();
			data.forEach(function(element) {
				if (element.open_time < currTime || element.close_time > currTime ){
					element.isMessOpen = !true
				}else{
					element.isMessOpen = !false
				}
				newData.push(element)
			});
			this.hotelData = newData;
		});
	};

	navigateToHotel(resto_id) {
		this.navCtrl.push(HotelHomePage, { 'id': resto_id, 'hotelType':'mess'});
	}


}
