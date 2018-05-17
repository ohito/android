import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { EmployeeRestApiProvider } from '../../providers/employee-rest-api/employee-rest-api';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the ModalRecipientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-recipient',
  templateUrl: 'modal-recipient.html',
})
export class ModalRecipientPage {

  username: string;

  strNIKRecipient: string;
  strUsername: string;

  employee : string[];
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public rest: EmployeeRestApiProvider, private auth: AuthServiceProvider,
     public viewCtrl : ViewController) {

      let info = this.auth.getUserInfo();
      this.username =localStorage.getItem('username');
      //this.getEmployees(this.username);
      console.log('employee',this.employee);
  }

  key_name : string;
  clean_key_name : any;
  searchRecipient(){
    //alert(this.key_name);
    //this.clean_key_name = this.key_name.trim;
    //this.key_name=this.key_name.replace(" ","");
    if(this.key_name == null||/^\s+$/.test(this.key_name)||this.key_name == " "){
      alert('input key name');
    }else{
      this.getEmployees(this.username,this.key_name);
      //alert('search');
    }
  }

  search(){
    this.getEmployees(this.username,this.key_name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalRecipientPage');
  }

  getEmployees(NIK:string,keyName : string) {
      this.rest.getEmployee(NIK,keyName)
         .subscribe(
            employee => this.employee = employee,
           error =>  this.errorMessage = <any>error);
    }  

    itemSelected(NIK: string,name : string) {
      this.strNIKRecipient = NIK;
      this.strUsername = name;
    }

    public closeModal(){
      var data = { 'NIK':this.strNIKRecipient ,'name':this.strUsername};
      this.viewCtrl.dismiss(data);
  }

}
