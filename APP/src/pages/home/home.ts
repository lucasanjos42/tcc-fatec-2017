import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';
import { Storage } from '@ionic/storage';
import { LoginPage } from './../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage{

  users: any[];
  page: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storage: Storage) {

  }
  
  logout(){
    this.storage.clear();
    this.page = { title: 'Login', component: LoginPage }
    this.navCtrl.setRoot(this.page.component);
    console.log("Logoff Sucesso.")
  }
}
