import { AdminModule } from './@admin/pages/admin.module';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PublicModule } from './@public/pages/public.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AdminModule,PublicModule,RouterModule],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meang-frontend';
}
