import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';  
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http'; 

@Injectable()
export class HotelService{
  constructor(private http:Http){
this.getLoginUser();
console.log("constructor", this.selectedLocation);
  }
public selectedLocation:any;
  public dummyUser={'id':1,"name":"Avi","email":"pramod.shelke@yahoo.com","contactNum":999999};

  extractData (res: Response){
      return res.json();
  }
  getHotelData(): Observable<any[]>{

        return this.http.get(`http://www.kinnets.com/insideout/all_fetch.php?limit=10&offset=0`).map(this.extractData);
    }

    getLoginUser(){
        // return this.http.get(``).map(this.extractData);
        return this.dummyUser;
             // return this.http.post("/api",user);
        
    }
     
     
}