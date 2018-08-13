import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { ForgotPage } from '../forgot/forgot';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from '../../app/app.service';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
	private loginForm : FormGroup;

	constructor( private appService: AppService, private formBuilder: FormBuilder, private navCtrl : NavController ) {
		this.loginForm = this.formBuilder.group({
		  username: ['', Validators.required],
		  password: ['', Validators.required]
		});
	};
	
  logForm(){
	//this.navCtrl.push(TabsPage ,{},{animate:false});
	this.appService.showLoading();
	this.appService.getUserLogin(this.loginForm.value).subscribe(data => {
		this.appService.hideLoading();
        if (data[0].message == 'success' || data[0].message == 'Success') {
			this.navCtrl.push(TabsPage ,{},{animate:false});
        } else {
			alert('Error !');
        }
      });
  };

  signup(){
    this.navCtrl.push(SignupPage ,{},{animate:false});
  };

  forgotPassword(){
    this.navCtrl.push(ForgotPage);
  };

}
