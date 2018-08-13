import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular'; 

import { AllListPage } from '../all-list/all-list';
import { HotelService } from '../hotel/hotel.service';
import { AppService } from '../../app/app.service';


declare var google: any;

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [Geolocation, HotelService]
})

export class ListPage {

  autocompleteItems: any;
  autocomplete: any;
  acService: any;
  placesService: any;
  query: '';

  public selectedLocation;
  public getLocation;
  public currentLocation;

  constructor(public navCtrl: NavController,
              private geolocation: Geolocation,
              private platform: Platform,
              private appService: AppService,
              public http: Http) {

    
    this.geolocation.getCurrentPosition().then((resp) => {
      var lat = resp.coords.latitude;
      var long = resp.coords.longitude;
      console.log("lat", lat);
      console.log("Long", long);
      this.http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long + '&sensor=true')
        .map(res => res.json()).subscribe(data => {
          var address = data.results[0];
          this.currentLocation = address.formatted_address;
          console.log("city", address.address_components[1].short_name);
        });
    }).catch((error) => {
      // console.log('Error getting location', error);
    });

    this.acService = new google.maps.places.AutocompleteService();        
    this.autocompleteItems = [];
    this.autocomplete = {
    query: ''
    };   
 

  }

  ngOnInit() {

    this.acService = new google.maps.places.AutocompleteService();        
    this.autocompleteItems = [];
    this.autocomplete = {
    query: ''
    }; 

    // this.getlocation().then(val => {
    //   console.log('val', val)
    // });

  } 

  setLocation() {
    this.platform.ready().then(() => {

      // get current position
      this.geolocation.getCurrentPosition().then(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });

      const watch = this.geolocation.watchPosition().subscribe(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });

      // to stop watching
      watch.unsubscribe();

    });
  }
  getlocation() {
    let val;
    let options = {
      timeout: 10000,
      enableHighAccuracy: true
    };
    val = this.geolocation.getCurrentPosition(options).then((resp) => {
      return resp;
    });
    return val;
  }
  ionViewDidLoad() {
    console.log('You are on List Page');
  }

  updateSearch() {
    console.log('modal > updateSearch');
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    let self = this;
    let config = {
      types: ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
      input: this.autocomplete.query,
      componentRestrictions: {}
    }

    this.acService.getPlacePredictions(config, function (predictions, status) {
      console.log('modal > getPlacePredictions > status > ', status);
      self.autocompleteItems = [];
      predictions.forEach(function (prediction) {
        self.autocompleteItems.push(prediction);
      });
    });
  }

  chooseItem(item) {
    this.selectedLocation = item;
    this.getLocation = this.selectedLocation['description']
    this.autocompleteItems = [];
    this.appService.setData(this.getLocation);
    console.log('Data', this.getLocation)
  }

  dismiss() {
    // this.autocomplete.query='';
  }

  navigateToAllList() {
    this.navCtrl.push(AllListPage);
  }

}


