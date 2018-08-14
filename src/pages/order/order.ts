import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UtilityProvider } from '../../providers/utility/utility';
import { ServicesProvider } from '../../providers/services/services';

/**
* Generated class for the OrderPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  order: any[];
  productList: any[];
  loggedInid: any;
  constructor(
    
    public utility: UtilityProvider, public navCtrl: NavController, 
    public navParams: NavParams, public _services: ServicesProvider) 
    {
      let user=JSON.parse(localStorage.getItem('token'));
      this.loggedInid=user.id
      
      console.log(this.loggedInid);
      
    }
    
    ionViewDidLoad() {
      // this._services.
      this._services.getOrderList( this.loggedInid).subscribe((response)=>{
        
        
        this.productList=response.response.data;
        
        
        
        
      },(error)=>{
        console.log(error);
        
      })
    }
    
  }
  