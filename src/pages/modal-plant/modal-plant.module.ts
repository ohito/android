import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPlantPage } from './modal-plant';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ModalPlantPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPlantPage),
    PipesModule
  ],
})
export class ModalPlantPageModule {}
