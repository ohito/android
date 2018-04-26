import { Component } from '@angular/core';
import { NavController, AlertController, App } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // username = '';
  // email = '';
  username: string;
  

  items = [
    'Lenovo ThinkPad E460',
    'Xiaomi Redmi Note 3 Pro',
    'LG Monitor'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
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

  constructor(public navCtrl: NavController , private auth: AuthServiceProvider,
    public alertCtrl: AlertController,public app:App) {
    // let info = this.auth.getUserInfo();
    // this.username = info['name'];
    // this.email = info['email'];

    this.navCtrl = navCtrl;
    this.username = window.localStorage.getItem('username');
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
