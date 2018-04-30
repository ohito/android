import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the AssetInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asset-info',
  templateUrl: 'asset-info.html',
})
export class AssetInfoPage {
  username: string;
  asset_id: string;
  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthServiceProvider, public http:HttpClient) {
    let info = this.auth.getUserInfo();
    this.username =localStorage.getItem('username');
    this.asset_id =localStorage.getItem('asset_id');
    this.loadData();
  }

  loadData(){
    let data : Observable<any>;
    data = this.http.get('http://dev.aio.co.id/ionic/get_info_assets.php?asset_id='+this.asset_id);
    data.subscribe(result =>{
      this.items =  result;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssetInfoPage');
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
    //alert(item);
    //this.navCtrl.push(AssetInfoPage);
}

}
