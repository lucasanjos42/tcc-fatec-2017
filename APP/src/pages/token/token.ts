import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ITimer } from './timer/itimer';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from './../../providers/service-provider';

@Component({
    selector: 'page-token',
    templateUrl: 'token.html'
})
export class TokenPage {

    userEmail: string;

    constructor(public navCtrl: NavController, public storage: Storage, public service: ServiceProvider) {
        storage.get('user').then((val) => {
            this.userEmail = val.email;
        });
    }
    
    public timer: ITimer;

    tokenActive: boolean = false;
    timeInSeconds: number = 30;
    token: string = '';

    ngOnInit() {
        this.initTimer();
    }

    generateToken() {
        this.token = '';
        this.tokenActive = true;
        const params = {
            'email': this.userEmail
        };
        this.service.createToken(params)
            .subscribe(
                data => {
                    this.token = data;
                    this.startTimer();
                }
            )
    }

    hasFinished() {
        return this.timer.hasFinished;
    }

    refreshToken() {
        this.tokenActive = false;
        this.initTimer();
    }
 
    initTimer() {
        if(!this.timeInSeconds) { this.timeInSeconds = 0; }
 
        this.timer = <ITimer>{
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
        };
 
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    }
 
    startTimer() {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    }
 
    timerTick() {
        setTimeout(() => {
            if (!this.timer.runTimer) { return; }
            this.timer.secondsRemaining--;
            this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
            if (this.timer.secondsRemaining > 0) {
                this.timerTick();
            }
            else {
                this.timer.hasFinished = true;
            }
        }, 1000);
    }
 
    getSecondsAsDigitalClock(inputSeconds: number) {
        var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? "0" + hours : hours.toString();
        minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    }

}
    