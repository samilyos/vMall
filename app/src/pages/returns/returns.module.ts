import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { returnsPage } from './returns';
import { SharedModule } from '../../app/shared.module';

@NgModule({
  declarations: [
    returnsPage,
  ],
  imports: [
    IonicPageModule.forChild(returnsPage),
    SharedModule
  ],
})
export class returnsPageModule {}
