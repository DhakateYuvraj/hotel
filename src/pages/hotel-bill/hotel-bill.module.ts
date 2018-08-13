import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelBillPage } from './hotel-bill';

@NgModule({
  declarations: [
    HotelBillPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelBillPage),
  ],
})
export class HotelBillPageModule {}
