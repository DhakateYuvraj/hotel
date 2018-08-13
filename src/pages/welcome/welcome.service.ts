import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';  
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http'; 

@Injectable()
export class WelcomeService{
  constructor(private http:Http){

  }
  

}
