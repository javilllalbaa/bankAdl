import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';

import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { creditFormatPipe } from '../pipes/creditFormat.pipe';
import { FormatPipe } from '../pipes/format.pipe';


@NgModule({
  declarations: [
    LayoutComponent, 
    FooterComponent, 
    HeaderComponent,
    FormatPipe,
    creditFormatPipe
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
  ],
  exports: [
    FormatPipe,
    creditFormatPipe
  ]
})
export class WebsiteModule { }
