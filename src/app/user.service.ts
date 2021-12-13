import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  Login(){
    localStorage.setItem('IsLogin','true');
  }
  Logout(){
    localStorage.setItem('IsLogin','false');
  }
}
