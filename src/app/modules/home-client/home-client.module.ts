import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeClientRoutingModule } from './home-client-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeClientRoutingModule
  ]
})
export class HomeClientModule { }
