import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    this.menuCtrl.enable(true, 'myMenu');
  }

  showDiv(d){
    //document.getElementById('22').style.display = "block";
    if (d == 22){
      document.getElementById('22-b').style.background = "orange";
      document.getElementById('23-b').style.background = "#304B78";
      document.getElementById('24-b').style.background = "#304B78";
      document.getElementById('25-b').style.background = "#304B78";
      document.getElementById('26-b').style.background = "#304B78";
      document.getElementById('22-b').style.color = "#060E29";
      document.getElementById('23-b').style.color = "white";
      document.getElementById('24-b').style.color = "white";
      document.getElementById('25-b').style.color = "white";
      document.getElementById('26-b').style.color = "white";
      document.getElementById('22').style.display = "block";
      document.getElementById('23').style.display = "none";
      document.getElementById('24').style.display = "none";
      document.getElementById('25').style.display = "none";
      document.getElementById('26').style.display = "none";
    } else if (d == 23){
      // document.getElementById('22-b').style.background = "#304B78";
      document.getElementById('23-b').style.background = "orange";
      document.getElementById('24-b').style.background = "#304B78";
      document.getElementById('25-b').style.background = "#304B78";
      document.getElementById('26-b').style.background = "#304B78";
      // document.getElementById('22-b').style.color = "white";
      document.getElementById('23-b').style.color = "#060E29";
      document.getElementById('24-b').style.color = "white";
      document.getElementById('25-b').style.color = "white";
      document.getElementById('26-b').style.color = "white";
      // document.getElementById('22').style.display = "none";
      document.getElementById('23').style.display = "block";
      document.getElementById('24').style.display = "none";
      document.getElementById('25').style.display = "none";
      document.getElementById('26').style.display = "none";
    } else if (d == 24){
      // document.getElementById('22-b').style.background = "#304B78";
      document.getElementById('23-b').style.background = "#304B78";
      document.getElementById('24-b').style.background = "orange";
      document.getElementById('25-b').style.background = "#304B78";
      document.getElementById('26-b').style.background = "#304B78";
      // document.getElementById('22-b').style.color = "white";
      document.getElementById('23-b').style.color = "white";
      document.getElementById('24-b').style.color = "#060E29";
      document.getElementById('25-b').style.color = "white";
      document.getElementById('26-b').style.color = "white";
      // document.getElementById('22').style.display = "none";
      document.getElementById('23').style.display = "none";
      document.getElementById('24').style.display = "block";
      document.getElementById('25').style.display = "none";
      document.getElementById('26').style.display = "none";
    } else if (d == 25){
      // document.getElementById('22-b').style.background = "#304B78";
      document.getElementById('23-b').style.background = "#304B78";
      document.getElementById('24-b').style.background = "#304B78";
      document.getElementById('25-b').style.background = "orange";
      document.getElementById('26-b').style.background = "#304B78";
      // document.getElementById('22-b').style.color = "white";
      document.getElementById('23-b').style.color = "white";
      document.getElementById('24-b').style.color = "white";
      document.getElementById('25-b').style.color = "#060E29";
      document.getElementById('26-b').style.color = "white";
      // document.getElementById('22').style.display = "none";
      document.getElementById('23').style.display = "none";
      document.getElementById('24').style.display = "none";
      document.getElementById('25').style.display = "block";
      document.getElementById('26').style.display = "none";
    } else if(d == 26){
      // document.getElementById('22-b').style.background = "#304B78";
      document.getElementById('23-b').style.background = "#304B78";
      document.getElementById('24-b').style.background = "#304B78";
      document.getElementById('25-b').style.background = "#304B78";
      document.getElementById('26-b').style.background = "orange";
      // document.getElementById('22-b').style.color = "white";
      document.getElementById('23-b').style.color = "white";
      document.getElementById('24-b').style.color = "white";
      document.getElementById('25-b').style.color = "white";
      document.getElementById('26-b').style.color = "#060E29";
      // document.getElementById('22').style.display = "none";
      document.getElementById('23').style.display = "none";
      document.getElementById('24').style.display = "none";
      document.getElementById('25').style.display = "none";
      document.getElementById('26').style.display = "block";
    }

  }
}
