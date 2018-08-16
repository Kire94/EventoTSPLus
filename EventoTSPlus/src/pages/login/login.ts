import { Component } from '@angular/core';
import { NavController, LoadingController, Loading, AlertController, MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { SignupPage } from '../signup/signup';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { SchedulePage } from '../schedule/schedule';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  myForm: FormGroup;
  user: Observable<firebase.User>;
  public loading:Loading;

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public menuCtrl: MenuController
  ) {
    this.myForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.user = afAuth.authState;
    this.menuCtrl.enable(false, 'myMenu')
  }

  loginUser(){
    console.log("Email:" + this.myForm.value.email);
    console.log("Password:" + this.myForm.value.password);

    this.afAuth.auth.signInWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password).then(() => {
      console.log("User logging");
      this.navCtrl.setRoot(SchedulePage);
    }, (err) => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message: err.message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
    });

    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
  }

  goToSignup(){
    this.navCtrl.push(SignupPage);
  }

  goToResetPassword(){
    this.navCtrl.push(ResetPasswordPage);
  }

}
