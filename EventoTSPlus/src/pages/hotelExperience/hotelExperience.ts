import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ImageViewerController } from 'ionic-img-viewer';

@Component({
  selector: 'page-hotelExperience',
  templateUrl: 'hotelExperience.html'
})
export class HotelExperiencePage {
  _imageViewerCtrl: ImageViewerController;

  constructor(public navCtrl: NavController, imageViewerCtrl: ImageViewerController) {
    this._imageViewerCtrl = imageViewerCtrl;
  }

  presentImage(myImage){
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }

  pressButton(choice){
    var s = new String(document.getElementById(choice).style.display);

    if (s == "none"){
      document.getElementById(choice).style.display = "block";
    } else if (s == "block"){
      document.getElementById(choice).style.display = "none";
    }
  }

  pressInButton(choice, num){
    var s = new String(document.getElementById(choice).style.display);

    if (s == "none"){
      document.getElementById(choice).style.display = "block";
      for (var i = 1; i < 26; i++){
        var x = i.toString();
        if (x === num){
          document.getElementById(x).style.display = "block";
        } else {
          document.getElementById(x).style.display = "none";
        }
      }
    } else if (s == "block"){
      document.getElementById(choice).style.display = "none";
      for (var i = 1; i < 26; i++){
        var x = i.toString();
        if (x === '1'){
          document.getElementById(x).style.display = "block";
        } else {
          document.getElementById(x).style.display = "none";
        }
      }
    }
  }
}
