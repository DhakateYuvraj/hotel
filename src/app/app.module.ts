import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { Network } from '@ionic-native/network'; 
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs'; 
import { WelcomePage } from '../pages/welcome/welcome'; 
import { SignupPage } from '../pages/signup/signup';
import { HotelPage } from '../pages/hotel/hotel';
import { MapPage } from '../pages/map/map';
import { MessPage } from '../pages/mess/mess';  
import { ListPage } from '../pages/list/list';
import { FilterPage } from '../pages/filter/filter';
import { AllListPage } from '../pages/all-list/all-list';
import { HotelHomePage } from '../pages/hotel-home/hotel-home';
import { HotelDetailPage } from '../pages/hotel-detail/hotel-detail';
import { MessHomePage } from '../pages/mess-home/mess-home';
import { MessDetailPage } from '../pages/mess-detail/mess-detail';
import { SearchBarPage } from '../pages/search-bar/search-bar';
import { ForgotPage } from '../pages/forgot/forgot';
import { AppService } from './app.service';


import { ProfileMenuPage } from '../pages/profile-menu/profile-menu';
import { ProfilePage } from '../pages/profile/profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { HotelBillPage } from '../pages/hotel-bill/hotel-bill';
import { HideHeaderDirective } from '../directives/hide-header/hide-header';
import { HideFooterDirective } from '../directives/hide-footer/hide-footer';

import { NearbylistPage } from '../pages/nearbylist/nearbylist';
import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { LocationsProvider } from '../providers/locations/locations';



import { StatusBar } from '@ionic-native/status-bar';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage, 
    WelcomePage, 
    SignupPage,
    HotelPage,
    MapPage,
    MessPage, 
    ListPage,
    FilterPage,
    AllListPage,
    HotelHomePage,
    HotelDetailPage,
    MessHomePage,
    MessDetailPage,
    SearchBarPage,
    ForgotPage,
    ProfileMenuPage,
    ProfilePage,
    EditProfilePage,
    HideHeaderDirective,
    HideFooterDirective,
    HotelBillPage,
    NearbylistPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, 
    TabsPage,
    WelcomePage, 
    SignupPage,
    HotelPage,
    MapPage,
    MessPage,  
    ListPage,
    FilterPage,
    AllListPage,
    HotelHomePage,
    HotelDetailPage,
    MessHomePage,
    MessDetailPage,
    SearchBarPage,
    ForgotPage,
    ProfileMenuPage,
    ProfilePage,
    EditProfilePage, 
    HotelBillPage,
    NearbylistPage
  ],
  providers: [
    StatusBar, 
    HttpModule, AppService,
    Network,
    Geolocation, 
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnectivityProvider,
    GoogleMapsProvider,
    LocationsProvider,
    RemoteServiceProvider
  ]
})
export class AppModule {}
