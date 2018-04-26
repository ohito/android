import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs/tabs';
import { Http } from '@angular/http'; 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { HomePage } from '../../pages/home/home';
//import { TabsPage } from '../../pages/tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  authForm: FormGroup;
  data:any = {};
	loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthServiceProvider, private alertCtrl: AlertController,
     private loadingCtrl: LoadingController ,public http: Http,
     public formBuilder: FormBuilder) {

      this.data.username = '';
      this.data.pwd = '';
      this.data.response = '';

      this.http = http;
      
      // this.loading = this.loadingCtrl.create({
      //       content: 'Authenticating...'
      //   });
      this.loading;

      this.navCtrl = navCtrl;
 
        this.authForm = formBuilder.group({
            username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
        });
  }

  showLoading() {
    if(!this.loading){
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    }
}

dismissLoading(){
    if(this.loading){
        this.loading.dismiss();
        this.loading = null;
    }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submit() {
    var link = 'http://dev.aio.co.id/ionic/api.php';
    var myData = JSON.stringify({username: this.data.username,pwd: this.data.pwd});
    var vStatus = '';
    
    
    this.showLoading();

    this.http.post(link, myData)
    .subscribe(data => {
    //this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
    vStatus = data["_body"];
    if (vStatus==="Success"){
      
      window.localStorage.setItem('username', this.data.username);
      window.localStorage.setItem('password', this.data.pwd);

      this.loading.dismiss();
      this.doAlert(vStatus);
    }else{
      this.loadingCtrl.create({
 
     }).dismiss();
      //this.data.response = data["_body"];
      this.loading.dismiss().then(() => {
              this.data.response = data["_body"];
         });
 
    }
    }, error => {
    console.log("Oooops!");
    });
    
  }
  
  doAlert(vStatus) {
    //this.presentLoading();
 
     let alert = this.alertCtrl.create({
 
       title: 'Info!',
 
       message: vStatus,
 
       buttons: [
 
         {
 
           text: 'Ok',
 
           handler: () => {
 
             console.log('Ok clicked');
      //  this.navCtrl.setRoot('WelcomePage');
      this.navCtrl.setRoot(TabsPage);
           }
 
         }
 
       ]
 
     });
 
     alert.present()
 
   }

}
