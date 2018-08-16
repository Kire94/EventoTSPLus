import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html'
})
export class SpeakersPage {

  constructor(public navCtrl: NavController) {

  }

  hide(name){
    if(document.getElementById(name).style.display === 'block'){
      document.getElementById(name).style.display = "none";
    } else {
      document.getElementById(name).style.display = "block";
    }
  }

}
