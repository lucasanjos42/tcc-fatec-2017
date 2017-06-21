import { ServiceProvider } from './../../providers/service-provider';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})

export class RegisterPage {

  register: FormGroup;
  page: any;

  constructor(public navCtrl: NavController, public FormBuilder: FormBuilder, public service: ServiceProvider, public AlertCtrl: AlertController) {
    this.register = this.FormBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.maxLength(30),
        Validators.minLength(3),
        Validators.pattern('^[A-z\sçáéíóúàâêôãõëöü ]+$'),
        Validators.required
      ])),
      surname: new FormControl('', Validators.compose([
        Validators.maxLength(30),
        Validators.minLength(2),
        Validators.pattern('^[A-z\sçáéíóúàâêôãõëöü ]+$'),
        Validators.required
      ])),
      gender: new FormControl('', Validators.required),
      birthDate: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.compose([
        Validators.maxLength(11),
        Validators.minLength(11),
        Validators.pattern('([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})'),
        Validators.required
      ])),
      rg: new FormControl('', Validators.compose([
        Validators.maxLength(9),
        Validators.minLength(9),
        Validators.pattern('[a-zA-Z-0-9 ]*'),
        Validators.required
      ])),
      phoneNumber: new FormControl('', Validators.compose([
        Validators.maxLength(11),
        Validators.minLength(11),
        Validators.pattern['[0-9 ]*'],
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required])),
      address: new FormControl('', Validators.compose([
        Validators.pattern('^[A-z\sçáéíóúàâêôãõëöü ]+$'),
        Validators.required
      ])),
      city: new FormControl('', Validators.compose([
        Validators.maxLength(30),
        Validators.pattern('^[A-z\sçáéíóúàâêôãõëöü ]+$'),
        Validators.required
      ])),
      province: new FormControl('', Validators.compose([
        Validators.maxLength(30),
        Validators.pattern('^[A-z\sçáéíóúàâêôãõëöü ]+$'),
        Validators.required
      ])),
      cep: new FormControl('', Validators.compose([
        Validators.maxLength(8),
        Validators.minLength(8),
        Validators.pattern['^[A-z\sçáéíóúàâêôãõëöü ]+$'],
        Validators.required
      ])),
      cardNumber: new FormControl('', Validators.compose([
        Validators.maxLength(16),
        Validators.minLength(16),
        Validators.pattern("[0-9 ]*"),
        Validators.required
      ])),
      type: new FormControl('', Validators.required),
      expirationDate: new FormControl('', Validators.required),
      cvv: new FormControl('', Validators.compose([
          Validators.maxLength(3),
          Validators.minLength(3),
          Validators.pattern("[0-9 ]*"),
          Validators.required
      ]))
    });
  }


  postData() {

    let params = this.register.value;

    this.service.postData(params)
      .subscribe(
        data => {
          let alert = this.AlertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Acesse sua conta e comece a usar!',
            buttons: [{
              text: 'Ok',
              handler: data => {
                this.register.reset();
                this.page = { title: 'Login', component: LoginPage };
                this.navCtrl.setRoot(this.page.component);
              }
            }]
          });
          alert.present();
        },
        err => console.log(err)
      );

  }
}