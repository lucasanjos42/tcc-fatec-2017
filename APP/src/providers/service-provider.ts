import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseOptions, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()

export class ServiceProvider {

    api: string = 'http://localhost:3000/';
    token: string;
    headers: any = new Headers;
    options: any;

    constructor(public http: Http, public storage: Storage){

        storage.get('token').then((val) => {
            this.token = val;
            this.headers.append('token', this.token);
            this.options = new RequestOptions({headers: this.headers});
        });

    }

    login(data) {
        return this.http.post(this.api + 'login', data).map(res => res.json());
    }

    getData(){
        return this.http.get(this.api + 'user').map(res => res.json());
    }

    postData(data){

        return this.http.post(this.api + 'user', data).map(
            (res: Response) => { return res.json() }
        );
    }

    putData(data, id){

        return this.http.put(this.api + 'user/' + id, data, this.options).map(
            (res: Response) => { return res.json() }
        );
    }

    deleteData(id){
        return this.http.delete(this.api + 'user/' + id)
        .map(
            (res: Response) => { return res.json() }
        );

    }

    createToken(email) {
        return this.http.post(this.api + 'token', email, this.options).map(res => res.json());
    }

}