import { ServiceProvider } from './../../providers/service-provider';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})

export class UserPage {
  user: FormGroup;
  name: string;
  _id: string;
  surname: string;
  gender: string;
  birthDate: Date;
  cpf: string ;
  rg: string;
  phoneNumber;
  email: string;
  password: string;
  address: string;
  city: string;
  province: string;
  cep: string;
  cardNumber: string;
  type: string;
  expirationDate: Date;
  cvv: string;
  credentials: any = {};
  page: any;

  constructor(public navCtrl: NavController, public FormBuilder: FormBuilder, public service: ServiceProvider,
    public AlertCtrl: AlertController, public storage: Storage) {
    storage.get('user').then((val) => {
      this.name = val.name;
      this.surname = val.surname;
      this.gender = val.gender;
      this.birthDate = val.birthDate;
      this.cpf = val.cpf;
      this.rg = val.rg;
      this.phoneNumber = val.phoneNumber;
      this.email = val.email;
      this.password = val.password;
      this.address = val.address;
      this.city = val.city;
      this.province = val.province;
      this.cep = val.cep;
      this.cardNumber = val.cardNumber;
      this.type = val.type;
      this.expirationDate = val.expirationDate;
      this.cvv = val.cvv;
      this._id = val._id;
    });
    
    this.user = this.FormBuilder.group({
      name: new FormControl(this.name, Validators.compose([
        Validators.maxLength(30),
        Validators.minLength(3),
        Validators.pattern('^[A-Za-z\sçáéíóúàâêôãõëöü ]+$'),
        Validators.required
      ])),
      surname: new FormControl(this.surname, Validators.compose([
        Validators.maxLength(30),
        Validators.minLength(2),
        Validators.pattern('^[A-Za-z\sçáéíóúàâêôãõëöü ]+$'),
        Validators.required
      ])),
      gender: new FormControl(this.gender, Validators.required),
      birthDate: new FormControl('', Validators.required),
      cpf: new FormControl(this.cpf, Validators.compose([
        Validators.maxLength(11),
        Validators.minLength(11),
        Validators.pattern('([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})'),
        Validators.required
      ])),
      rg: new FormControl(this.rg, Validators.compose([
        Validators.maxLength(9),
        Validators.minLength(9),
        Validators.pattern('[a-zA-Z-0-9 ]*'),
        Validators.required
      ])),
      phoneNumber: new FormControl(this.phoneNumber, Validators.compose([
        Validators.maxLength(11),
        Validators.minLength(11),
        Validators.pattern['[0-9 ]*'],
        Validators.required
      ])),
      email: new FormControl(this.email, Validators.compose([Validators.required])),
      password: new FormControl(this.password, Validators.compose([Validators.required])),
      address: new FormControl(this.address, Validators.compose([
        Validators.maxLength(30),
        Validators.pattern('^[A-z\sçáéíóúàâêôãõëöü ]+$'),
        Validators.required  
      ])),
      city: new FormControl(this.city, Validators.compose([
        Validators.maxLength(30),
        Validators.pattern('^[A-z\sçáéíóúàâêôãõëöü ]+$'),
        Validators.required
      ])),
      province: new FormControl(this.province, Validators.compose([
        Validators.maxLength(30),
        Validators.pattern('^[A-Za-z\sçáéíóúàâêôãõëöü ]+$'),
        Validators.required
      ])),
      cep: new FormControl(this.cep, Validators.compose([
        Validators.maxLength(8),
        Validators.minLength(8),
        Validators.pattern['[0-9 ]*'],
        Validators.required
      ])),
      cardNumber: new FormControl(this.cardNumber, Validators.compose([
        Validators.maxLength(16),
        Validators.minLength(16),
        Validators.pattern("[0-9 ]*"),
        Validators.required
      ])),
      type: new FormControl(this.type, Validators.required),
      expirationDate: new FormControl(this.expirationDate, Validators.required),
      cvv: new FormControl(this.cvv, Validators.compose([
        Validators.maxLength(3),
        Validators.minLength(3),
        Validators.pattern("[0-9 ]*"),
        Validators.required
      ]))
    });
  }


  putData() {
    let params = this.user.value;
    this.service.putData(params, this._id)
     .subscribe(
        data => {
            console.log(data);
            let alert = this.AlertCtrl.create({
                title: 'Sucesso',
                subTitle: 'Dados atualizados com sucesso',
                buttons: [{
                    text: 'OK',
                    handler: data => {
                        this.page = {title: 'Home', component: HomePage};
                        this.navCtrl.setRoot(this.page.component);
                    }
                }]
            });
            alert.present();
            this.user.reset();
        },
        err => console.log(err)
    );
  }
}
