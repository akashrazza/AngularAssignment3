import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { AuthGuardService } from './auth-guard.service';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'About',component:AboutComponent,canActivate:[AuthGuardService]},
  {path:'Contact',component:ContactComponent,canActivate:[AuthGuardService]},
  {path:'Product',component:ProductComponent,canActivate:[AuthGuardService]},
  {path:'productdetail/:id',component:ProductComponent},
  {path:'**',component:NoPageFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
