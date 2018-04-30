import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClaimListPage } from './claim-list';

@NgModule({
  declarations: [
    ClaimListPage,
  ],
  imports: [
    IonicPageModule.forChild(ClaimListPage),
  ],
})
export class ClaimListPageModule {}
