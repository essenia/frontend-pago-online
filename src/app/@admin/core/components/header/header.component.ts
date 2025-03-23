import { Component, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-admin-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // Esta variable se usará para controlar el estado del toggle.
  toggledValue = true;
// Se declara un `@Output()`, que permite al componente hijo emitir eventos al padre.
// `newItemEvent` es un EventEmitter que enviará valores booleanos.
  @Output() toggleChange = new EventEmitter<boolean>();
   toggled() {   // Se verifica si `toggledValue` es `undefined`
   
    if(this.toggledValue === undefined){
      // Si `toggledValue` es `undefined`, se asigna el valor `true`  
      this.toggledValue = true;
    }
    this.toggledValue = ! this.toggledValue;
    console.log(this.toggledValue);
    this.toggleChange.emit(this.toggledValue);
   }
}
