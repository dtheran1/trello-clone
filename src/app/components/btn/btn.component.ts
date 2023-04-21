import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button'
  @Input() color: 'primary' | 'success' | 'danger' = 'danger'

  get colors() { // Al ser un getters se ejecuta inmediatamente
    return {
      'bg-green-700': this.color === 'success',
      'hover:bg-green-800': this.color === 'success',
      'focus:bg-green-300': this.color === 'success',
      'bg-blue-700': this.color === 'primary',
      'hover:bg-blue-800': this.color === 'primary',
      'focus:bg-blue-300': this.color === 'primary',
      'bg-red-700': this.color === 'danger',
      'hover:bg-red-800': this.color === 'danger',
      'focus:bg-red-300': this.color === 'danger',
    }
  }

}
