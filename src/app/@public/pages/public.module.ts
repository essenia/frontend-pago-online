import { PublicComponent } from './public.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicComponent,
    PublicRoutingModule
  ]
})
export class PublicModule { }
