import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ClaimListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-claim-list',
  templateUrl: 'claim-list.html',
})
export class ClaimListPage {
  username:string;
  items : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthServiceProvider, public http:HttpClient) {
      let info = this.auth.getUserInfo();
      this.username =localStorage.getItem('username');
      this.loadData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClaimListPage');
  }

  loadData(){
    let data : Observable<any>;
    data = this.http.get('http://dev.aio.co.id/ionic/getIclaimList.php?NIK='+this.username);
    data.subscribe(result =>{
      this.items =  result;
    })
  }

}
