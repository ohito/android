import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssetListPage } from './asset-list';

@NgModule({
  declarations: [
    AssetListPage,
  ],
  imports: [
    IonicPageModule.forChild(AssetListPage),
  ],
})
export class AssetListPageModule {}
