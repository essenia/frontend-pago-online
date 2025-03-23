import { TitleComponent } from './../core/components/title/title.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "../core/components/sidebar/sidebar.component";
import { HeaderComponent } from '../core/components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [RouterModule, SidebarComponent, HeaderComponent, TitleComponent,CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  
})
export class AdminComponent {
  toggledValue = true;
toggled($event: boolean) {
  console.log('admin', $event);
  this.toggledValue = $event;
}

}
