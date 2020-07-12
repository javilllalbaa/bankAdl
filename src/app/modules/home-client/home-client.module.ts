import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeClientRoutingModule } from './home-client-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatPipe } from './../../pipes/format.pipe'


@NgModule({
  declarations: [
    HomeComponent,
    FormatPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeClientRoutingModule
  ]
})
export class HomeClientModule { }
