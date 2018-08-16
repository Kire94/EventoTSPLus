import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Camera } from '@ionic-native/camera';
import { FileTransfer/*, FileUploadOptions, FileTransferObject*/ } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SchedulePage } from '../pages/schedule/schedule';
import { MapPage } from '../pages/map/map';
import { SpeakersPage } from '../pages/speakers/speakers';
import { HotelExperiencePage } from '../pages/hotelExperience/hotelExperience';
import { SponsorsPage } from '../pages/sponsors/sponsors';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { CameraPage } from '../pages/camera/camera';

import { FIREBASE_CONFIG } from './app.firebase.config';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SchedulePage,
    MapPage,
    SpeakersPage,
    HotelExperiencePage,
    SponsorsPage,
    LoginPage,
    SignupPage,
    ResetPasswordPage,
    CameraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SchedulePage,
    MapPage,
    SpeakersPage,
    HotelExperiencePage,
    SponsorsPage,
    LoginPage,
    SignupPage,
    ResetPasswordPage,
    CameraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Camera,
    FileTransfer,
    /*FileUploadOptions,
    FileTransferObject,*/
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

}
// export const firebaseConfig = {
//   // apiKey: "AIzaSyBvvc2iaIRhx1NqF9AiGkY_hkuueKOST6g",
//   // authDomain: "eventotsplus-1530635392183.firebaseapp.com",
//   // databaseURL: "https://eventotsplus-1530635392183.firebaseio.com",
//   // projectId: "eventotsplus-1530635392183",
//   // storageBucket: "eventotsplus-1530635392183.appspot.com",
//   // messagingSenderId: "217744633046"
//   apiKey: "AIzaSyAjy6wRLwJuQ6_RSmxe_r62wlsW56Jdojw",
//   authDomain: "eventotsplus2-1532907176175.firebaseapp.com",
//   databaseURL: "https://eventotsplus2-1532907176175.firebaseio.com",
//   projectId: "eventotsplus2-1532907176175",
//   storageBucket: "eventotsplus2-1532907176175.appspot.com",
//   messagingSenderId: "390741891020"
// }
