import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from '../../app/app.service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
	private registrationForm : FormGroup;

	constructor( private appService: AppService, private formBuilder: FormBuilder, private navCtrl : NavController ) {
		this.registrationForm = this.formBuilder.group({
		  username: ['', Validators.required],
		  email: ['', Validators.required],
		  mobile: ['', Validators.required],
		  password: ['', Validators.required],
		  repassword: ['', Validators.required]
		});
	};

  regForm(){
	console.log(this.registrationForm.value);
	if(this.registrationForm.value.password !== this.registrationForm.value.repassword){
		alert('check password')
	}else{	
		this.appService.showLoading();
		this.appService.registerUser(this.registrationForm.value).subscribe(data => {
			this.appService.hideLoading();
			if (data[0].message == 'success' || data[0].message == 'Success') {
				this.navCtrl.push(WelcomePage)
			} else {
				alert('Error !');
			}
		});
	}
  }
  cancelRegistration(){
    this.navCtrl.push(WelcomePage);
  }

}
