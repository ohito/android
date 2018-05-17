import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalLocationPage } from './modal-location';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ModalLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalLocationPage),
    PipesModule
  ],
})
export class ModalLocationPageModule {}
