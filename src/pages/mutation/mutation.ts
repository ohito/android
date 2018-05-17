import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';

/**
 * Generated class for the MutationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-mutation',
  templateUrl: 'mutation.html',
})
export class MutationPage {
  plant : string;  
  strPlantCode : string;

  location : string;  
  recipient : string;
  strRecipient : string;
  strLocationCode : string;
  btnLocation :any;

  data:any = {};
  condition : string;
  loading: any;

  constructor(public navCtrl: NavController, public modalCtrl : ModalController
            ,private loadingCtrl: LoadingController,public http: Http
          ,private alertCtrl: AlertController ) {
    
  }

  public openModal(){
    var data = { message : 'hello worlds' };
    let modal = this.modalCtrl.create('ModalPlantPage',data);
    modal.onDidDismiss(data => {
        console.log('MODAL DATA', data);
        //alert(data['item']);
        this.plant = data['plant_code']+" - "+data['plant_name'];
        this.strPlantCode = data['plant_code'];
        this.btnLocation = true;
    });
    
    modal.present();
  }

  public openModalLocation(){
    if(this.plant==null){
      alert("select plant first");
    }else{
      var plant_code = { 'plant_code' : this.strPlantCode };
      let modalLocation = this.modalCtrl.create('ModalLocationPage',plant_code);
      modalLocation.onDidDismiss(data => {
          this.location = data['location_code']+" - "+data['location_name'];
          this.strLocationCode = data['location_code'];
      });
      
      modalLocation.present();
    }
  }

  public openModalRecipient(){
    let modalRecipient = this.modalCtrl.create('ModalRecipientPage');
    modalRecipient.onDidDismiss(data => {
        this.recipient = data['NIK']+" - "+data['name'];
        this.strRecipient = data['NIK'];
    });
    
    modalRecipient.present();
  }

  submit() {
    var link = 'http://dev.aio.co.id/ionic/mutation.php';
    var myData = JSON.stringify({
                                destination_plant: this.strPlantCode,
                                destination_location: this.strLocationCode,
                                condition: this.condition,
                                recipient : this.strRecipient
                              });
    var vStatus = '';
    console.log(myData);
    
    
    this.showLoading();

    this.http.post(link, myData)
    .subscribe(data => {
    //this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
    vStatus = data["_body"];
    if (vStatus==="Success"){
      
      window.localStorage.setItem('username', this.data.username);
      //window.localStorage.setItem('password', this.data.pwd);

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

  showLoading() {
    if(!this.loading){
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    }
  }

  doAlert(vStatus) {
    let alert = this.alertCtrl.create({
       title: 'Info!',
       message: vStatus,
       buttons: [
         {
           text: 'Ok',
           handler: () => {
             console.log('Ok clicked');
      //  this.navCtrl.setRoot('WelcomePage');
      this.navCtrl.setRoot(HomePage);
           }
         }
       ]
     });
     alert.present()
   }
}
