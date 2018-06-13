import { ProductComponent } from './product/product.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

import { ProductModule } from './product/product.module';
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { mainroutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, NavbarComponent,
    FooterComponent, HomeComponent, ContactComponent,
    BlogComponent, ProductComponent
  ],
  imports: [
    BrowserModule, RouterModule, mainroutes, FormsModule,
    ProductModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
