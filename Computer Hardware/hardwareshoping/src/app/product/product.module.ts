

import { BrowserModule } from '@angular/platform-browser';
import { ComputerStorageComponent } from './computerStorage.component';
import { DesktopComponent } from './desktop.component';
import { LaptopComponent } from './laptop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { productroutes } from './product.route';



@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, productroutes, BrowserModule],
    declarations: [LaptopComponent, DesktopComponent, ComputerStorageComponent],
    providers: [],
})
export class ProductModule { }
