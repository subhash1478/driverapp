import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {    ViewChild, ElementRef } from '@angular/core';
declare var google: any;
 /**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

    
  map: any;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){

    

  }

  
}