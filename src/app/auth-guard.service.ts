import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }
  canActivate(){
    var IsLogin = localStorage.getItem('IsLogin');
    if(IsLogin=='true'){
      return true;
    }
    else return false;
  }
}
