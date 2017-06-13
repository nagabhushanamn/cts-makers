import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app.routing';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';

import {DataTableModule,SharedModule} from 'primeng/primeng';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, ProductListComponent, ProductComponent, ProductFormComponent, LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule,
    SharedModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
