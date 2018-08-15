import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { ServicesProvider } from '../providers/services/services';
 
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
  constructor(platform: Platform,   
     public _services: ServicesProvider) {
      platform.ready().then(() => {
        if (platform.is('core')) {

        //   this.oneSignal.startInit("a0d66b31-b2a2-4a76-a7b2-54abb0175216", "977511232376")


        // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        
        // this.oneSignal.handleNotificationReceived().subscribe(() => {
        //  // do something when notification is received
        // });
        
        // this.oneSignal.handleNotificationOpened().subscribe(() => {
        //   // do something when a notification is opened
        // });
        
        // this.oneSignal.endInit();
    
      }

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
