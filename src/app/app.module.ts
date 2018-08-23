import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
 
import { ServicesProvider } from '../providers/services/services';
import { Geolocation } from '@ionic-native/geolocation';
import { UtilityProvider } from '../providers/utility/utility';
import { HttpClientModule } from '@angular/common/http';
import { Toast } from '@ionic-native/toast';
import { OneSignal } from '@ionic-native/onesignal';

@NgModule({
  declarations: [
    MyApp,
 
  ],
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  
  ],
  providers: [
    StatusBar,Geolocation,Toast,OneSignal,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesProvider,
    UtilityProvider
  ]
})
export class AppModule {}
