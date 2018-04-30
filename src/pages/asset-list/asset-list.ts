import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AssetInfoPage } from '../asset-info/asset-info';

/**
 * Generated class for the AssetListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asset-list',
  templateUrl: 'asset-list.html',
})
export class AssetListPage {
  username: string;
  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams ,
    private auth: AuthServiceProvider, public http:HttpClient) {
    let info = this.auth.getUserInfo();
    this.username =localStorage.getItem('username');
    //alert(this.username);
    this.loadData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssetListPage');
  }

  loadData(){
    let data : Observable<any>;
    data = this.http.get('http://dev.aio.co.id/ionic/get_assets.php');
    data.subscribe(result =>{
      this.items =  result;
    })
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
    window.localStorage.setItem('asset_id', item);
    //alert(item);
    this.navCtrl.push(AssetInfoPage);
}

}
