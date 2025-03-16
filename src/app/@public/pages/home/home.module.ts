import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';


@NgModule({
  declarations: [], // <-- Aquí declaras el componente
  imports: [
    CommonModule,
    HomeComponent,
    HomeRoutingModule,
    
  ]
})
export class HomeModule { }
