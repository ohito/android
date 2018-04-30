import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvanceListPage } from './advance-list';

@NgModule({
  declarations: [
    AdvanceListPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvanceListPage),
  ],
})
export class AdvanceListPageModule {}
