import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { LoggerService } from './logger.service';
import { StudentComponentComponent } from './student/student-component/student-component.component';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  test = "test";
  iNumber : number = 500;
  istring :string = "test string";
  user_Details = {uid:"raja",pass:"password"};
  is_disable=false;
  email_data=''
  change_state_to_false(){
    this.is_disable=false
  }
  change_state_to_true(){
    this.is_disable=true
  }
  send_data(val:string){
    this.email_data=val;
  }
  image_url = './assets/test1.png';
  parent_data = "test";

  bclass=false
  change(){
    this.bclass=false
  }
  change1(){
    this.bclass=true
  }
  strdata='yes';

  pipes1=''

  obj= [{uid:101,name:"test"},
  {uid:102,name:"test2"},
  {uid:103,name:"test3"},
  {uid:104,name:"test4"},
  {uid:105,name:"test5"},
  {uid:106,name:"test6"},
  {uid:107,name:"test7"}]

  bmorning = true;
  bevening = false;

  morning(){
    this.bmorning=true;
    this.bevening=false;
  }
  evening(){
    this.bevening=true;
    this.bmorning=false;
  }

  switch_data="1";


  icurrency = 5000;


  idate = Date.now()
  idate_date = new Date()
  idate_str = new Date().toString();

  idecimal  = 23.432343;

  ipercent = 21.212121;

  strslicedata = "my name is charan";

  itemp = 98;

  D3Q1str = 'test';

  ProductData :Product[] = [];
  
  constructor(private productserviceobj : ProductService,private loggerservice : LoggerService , private UserService : UserService){}
  getdata(){
  this.loggerservice.log( "Class Name : "+this.constructor.name + " Function Name : "+ this.getdata.name + " before Product data assignment");
  this.ProductData =  this.productserviceobj.getProductdetail()
  this.loggerservice.log( "Class Name : "+this.constructor.name + " Function Name : "+ this.getdata.name + " after Product data assignment");
  }
  child_data_out = ''
  getmessage(msg:string){
    this.child_data_out = msg;
  }

  Login(){
    this.UserService.Login()
  }
  LogOut(){
    this.UserService.Logout()
  }
}
