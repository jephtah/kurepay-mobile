import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FundPage } from './fund';
import { ComponentsModule } from '../../components/components.module';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    FundPage,
  ],
  imports: [
    IonicPageModule.forChild(FundPage),
    ComponentsModule,
    QRCodeModule
  ],
})
export class FundPageModule { }
