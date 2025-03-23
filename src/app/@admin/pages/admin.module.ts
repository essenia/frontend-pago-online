import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../core/components/title/title.component';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from '../core/components/header/header.component';
import { SidebarComponent } from '../core/components/sidebar/sidebar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminComponent,
    
    SidebarComponent,
    HeaderComponent,
    AdminRoutingModule
  ]
})
export class AdminModule { }
