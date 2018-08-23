import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { ServicesProvider } from '../providers/services/services';
import { OneSignal } from '@ionic-native/onesignal';

const config = {
  apiKey: 'AIzaSyAlBTR2dXVxE7lxPtxiaLSZet9uZG3u5yE',
  authDomain: 'bharampur-9142d.firebaseapp.com',
  databaseURL: 'https://bharampur-9142d.firebaseio.com/',
  projectId: 'bharampur-9142d',
  storageBucket: 'gs://bharampur-9142d.appspot.com',
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

   user:any={}
  rootPage: string;
  constructor(platform: Platform,   private oneSignal: OneSignal,
     public _services: ServicesProvider) {
      platform.ready().then(() => {
 

        //   this.oneSignal.startInit("db2e0cfe-be1a-4f51-9409-018d519e43ba", "977511232376")


        // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        
        // this.oneSignal.handleNotificationReceived().subscribe(() => {
        //  // do something when notification is received
        // });
        
        // this.oneSignal.handleNotificationOpened().subscribe(() => {
        //   // do something when a notification is opened
        // }); 
        
        // this.oneSignal.getIds().then(function(data){
        //   console.log(data);

        //  localStorage.setItem('devices_token',data.userId)
          
        // })
        
        // this.oneSignal.endInit();
        
     
      

        let logincheck = localStorage.getItem('token')
        this._services.getGeolocation();
         if ( logincheck != null) {
          this.rootPage = "DashboardPage";
        }
        else {
          this.rootPage = "SigninPage";
        }
   
    });
    firebase.initializeApp(config);
  }
  goToPage(page){
      
    this.nav.push(page);
   }

    
   logout() {
     localStorage.removeItem('userdetails')
     localStorage.removeItem('token')
     this.nav.setRoot("SigninPage");
   }
}
