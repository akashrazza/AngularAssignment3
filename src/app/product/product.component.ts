import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private product : ProductService, private router :Router , private activatedRoute :ActivatedRoute) { }
  arrProducts : Product[] = []
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((param)=>{
      var data = Number(param.get('id'));
      console.log(param)
      if(Number(data)>0){
        this.getProductById(data);
      }
      else{
        this.getallproduct()
      }
    })
    
  }

  getallproduct(){
    this.arrProducts = this.product.getProductdetail();
  }
  Navigate(id:number){
    this.router.navigate(['productdetail',id])
  }
  getProductById(getID:number){
    this.arrProducts = this.product.getProductById(Number(getID))
  }
}
