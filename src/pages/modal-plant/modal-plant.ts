import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { PlantRestApiProvider } from '../../providers/plant-rest-api/plant-rest-api';

/**
 * Generated class for the ModalPlantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-plant',
  templateUrl: 'modal-plant.html',
})
export class ModalPlantPage {
  items;
  strPlant_code :string;
  strPlant_name :string;

  plants: string[];
errorMessage: string;
descending: boolean = false;
order: number;
column: string = 'plant_name';
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController
              ,public http:HttpClient, public rest: PlantRestApiProvider) {
    //this.loadData();
    this.getPlants();
  }

  getPlants() {
      this.rest.getPlants()
         .subscribe(
            plants => this.plants = plants,
           error =>  this.errorMessage = <any>error);
    }  

    sort(){
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
      }

  // loadData(){
  //   let data : Observable<any>;
  //   data = this.http.get('http://dev.aio.co.id/ionic/getPlant.php');
  //   data.subscribe(result =>{
  //     this.items =  result;
  //   })
  // }

  public closeModal(){
    var data = { 'plant_code':this.strPlant_code ,'plant_name':this.strPlant_name};
    this.viewCtrl.dismiss(data);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPlantPage');
  }

//   getItems(ev) {
//     // Reset items back to all of the items
//     this.loadData();

//     // set val to the value of the ev target
//     var val = ev.target.value;
//     console.log('getItem',val);

//     // if the value is an empty string don't filter the items
//     if (val && val.trim() != '') {
//       this.items = this.items.filter((item) => {
//         //return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
//         return (item.plant_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
//       })
//     }
// }

itemSelected(plant_code: string,plant_name : string) {
    this.strPlant_code = plant_code;
    this.strPlant_name = plant_name;
  }

}
