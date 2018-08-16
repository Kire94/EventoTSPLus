import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-sponsors',
  templateUrl: 'sponsors.html'
})
export class SponsorsPage {

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
