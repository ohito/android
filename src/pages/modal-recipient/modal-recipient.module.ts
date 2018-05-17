import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalRecipientPage } from './modal-recipient';

@NgModule({
  declarations: [
    ModalRecipientPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalRecipientPage),
  ],
})
export class ModalRecipientPageModule {}
