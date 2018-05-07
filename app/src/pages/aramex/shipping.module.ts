import { SharedModule } from '../../app/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { shippingPage } from './shipping';


@NgModule({
  declarations: [
    shippingPage
  ],
  imports: [
    IonicPageModule.forChild(shippingPage),
    SharedModule
  ],
})
export class shippingPageModule {}
