import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SpeakersPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
    /*{ title: 'Home', component: HomePage, icon: 'star' },
      { title: 'List', component: ListPage, icon: 'star' },*/
      { title: 'Horarios', component: SchedulePage/*, icon: 'calendar' */},
      { title: 'Mapa', component: MapPage/*, icon: 'map' */},
      { title: 'Ponentes', component: SpeakersPage/*, icon: 'person' */},
      { title: 'Hotel', component: HotelExperiencePage/*, icon: 'bonfire' */},
      { title: 'Patrocinadores', component: SponsorsPage/*, icon: 'people' */},
      { title: 'Galería', component: CameraPage/*, icon: 'camera' */}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  signout(){
    this.nav.setRoot(LoginPage);
  }
}
