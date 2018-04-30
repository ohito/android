import { Component } from '@angular/core';
import { NavController, AlertController, App } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AssetListPage } from '../asset-list/asset-list';
import { ClaimListPage } from '../claim-list/claim-list';
import { AdvanceListPage } from '../advance-list/advance-list';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // username = '';
  // email = '';
  username: string;
  advCount:string;
  claimCount :string;
  items:any;
  itemsClaim:any;
  itemsAdv:any;

  constructor(public navCtrl: NavController , private auth: AuthServiceProvider,
    public alertCtrl: AlertController,public app:App,public http:HttpClient) {
    this.navCtrl = navCtrl;
    this.username = window.localStorage.getItem('username');
    this.loadData();
    this.loadClaimCount();
    this.loadAdvCount();
  }

  loadClaimCount(){
    let data : Observable<any>;
    data = this.http.get('http://dev.aio.co.id/ionic/getIclaim.php?NIK='+this.username);
    data.subscribe(result =>{
      this.itemsClaim =  result;
      this.claimCount = this.itemsClaim[0].iclaim_progress;
    })
  }

  loadAdvCount(){
    let data : Observable<any>;
    data = this.http.get('http://dev.aio.co.id/ionic/getAdvance.php?NIK='+this.username);
    data.subscribe(result =>{
      this.itemsAdv =  result;
      this.advCount = this.itemsAdv[0].adv_settlement;
    })
  }

  btnClaim(){
    this.navCtrl.push(ClaimListPage);
  }

  btnAdvance(){
    this.navCtrl.push(AdvanceListPage);
  }

  loadData(){
    let data : Observable<any>;
    data = this.http.get('http://dev.aio.co.id/ionic/get_assets.php?NIK='+this.username);
    data.subscribe(result =>{
      this.items =  result;
    })
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
    //alert(item);
    this.navCtrl.push(AssetListPage);
}


// Doughnut
public doughnutChartLabels:string[] = ['Belum Dipakai', 'Sudah Dipakai'];
public doughnutChartData:number[] = [1019000, 2891000];
public doughnutChartType:string = 'doughnut';

// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}

  logout(): void {
    let confirm = this.alertCtrl.create({
      title: 'Logout',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Oke',
          handler: () => {
            window.localStorage.removeItem('username');
            window.localStorage.removeItem('password');

            // this.navCtrl.setRoot(LoginPage);
            // this.navCtrl.popToRoot();   
            this.app.getRootNav().setRoot(LoginPage);

            //this.app.getRootNav().setRoot(LoginPage);
            // window.location.reload();
            
          }
        }
      ]
    });
    confirm.present();
  }   

}
