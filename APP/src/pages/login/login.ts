import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';

import { ServiceProvider } from '../../providers/service-provider';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  page: any;
  credentials: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider,
              public formBuilder: FormBuilder, public alertCtrl: AlertController, public storage: Storage) {

    this.credentials = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad Login');
  // }

  login() {
    this.service.login(this.credentials.value)
      .subscribe(
        data => {
          this.storage.set('user', data.user);
          this.storage.set('token', data.token);
          this.page = { title: 'Home', component: HomePage };
          this.navCtrl.setRoot(this.page.component);
        },
        error => {
          let alert = this.alertCtrl.create({
            title: 'Ops!',
            subTitle: 'Você inseriu suas credenciais erradas!',
            buttons: ['OK']
          });
          alert.present();
          this.credentials.reset();
        }
      );
  }

  register() {
    this.page = { title: 'Register', component: RegisterPage };
    this.navCtrl.push(this.page.component);
  }

}
