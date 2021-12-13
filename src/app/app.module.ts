import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { LoggerService } from './logger.service';
import { StudentModule } from './student/student.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    CustomPipePipe,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StudentModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
