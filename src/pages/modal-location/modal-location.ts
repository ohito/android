import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LocationRestApiProvider } from '../../providers/location-rest-api/location-rest-api';

/**
 * Generated class for the ModalLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-location',
  templateUrl: 'modal-location.html',
})
export class ModalLocationPage {
  plant :any;
  show:any;
  locations : string[];
  errorMessage: string;

  descending: boolean = false;
  order: number;
  column: string = 'location_name';

  strLocation_code :string;
  strLocation_name :string;

  constructor(public navCtrl: NavController, public navParams: NavParams
    ,public rest: LocationRestApiProvider, public viewCtrl : ViewController) {
    this.plant = this.navParams.get('plant_code');
    this.show = this.plant;
    this.getLocations(this.plant);
  }

  getLocations(plant_code:string) {
      this.rest.getLocations(plant_code)
         .subscribe(
            locations => this.locations = locations,
           error =>  this.errorMessage = <any>error);
    }  

    sort(){
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
      }

      public closeModal(){
        var data = { 'location_code':this.strLocation_code ,'location_name':this.strLocation_name};
        this.viewCtrl.dismiss(data);
    }

    itemSelected(location_code: string,location_name : string) {
      this.strLocation_code = location_code;
      this.strLocation_name = location_name;
    }

}
