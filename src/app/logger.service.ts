import { Injectable } from '@angular/core';


export class LoggerService {

  constructor() { }

  log(msg : string){
    let date = new Date().toString()
    console.log(date +" Message : " + msg);
  }
}
