import { Injectable } from '@angular/core';
import { Product } from './product';
import { LoggerService } from './logger.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private loggerservice : LoggerService) { }

  arrProducts = [
    new Product(1,'Charan',1000),
    new Product(2,'Raja',1000),
    new Product(3,'Gyan',1000),
    new Product(4,'Test4',1000),
    new Product(5,'Test1',1000),
    new Product(6,'Test2',1000),
    new Product(7,'Test3',1000),
  ]

  getProductdetail(){
    this.loggerservice.log( "Class Name : "+this.constructor.name + " Function Name : "+ this.getProductdetail.name + "In Get prosuct Detail Function");
    return this.arrProducts;
  }

  getProductById(id:number){
    return this.arrProducts.filter((arr)=>arr.id==id);
  }
}
