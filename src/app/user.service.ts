import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  doubtList = [
    { userId: '1', password:'test',accountType:'STUDENT',name:'Jayesh'},
    { userId: '2', password:'test',accountType:'TA',name:'Ayush'},
    { userId: '3', password:'test',accountType:'TA',name:'Aakash'},
    { userId: '4', password:'test',accountType:'TEACHERS',name:'Ankush'},
  ];
  loggedinUser:any;
  constructor() { }

  login(id:string,password:string):Observable<any>{
    //console.log(id+" "+password);
    var user = this.doubtList.filter(e=>e.userId===id && e.password===password);
    console.log(user[0])
    if(user.length > 0){
      this.loggedinUser = user[0];
      return of(true);
    }
    return of(false);
  }

  getUser():Observable<any>{
    return of(this.loggedinUser);
  }

  logout():Observable<any>{
    this.loggedinUser={};
    return of(true);
  }
}
