import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button'
  @Input() color: 'primary' | 'success' | 'danger' | 'ligth' | 'sky' = 'danger'

  mapColors = {
    success: {
      'bg-green-700': true,
      'hover:bg-green-800': true,
      'focus:bg-green-300': true,
      'text-white': true
    },
    primary: {
      'bg-blue-700': true,
      'hover:bg-blue-800': true,
      'focus:bg-blue-300': true,
    },
    danger: {
      'bg-red-700': true,
      'hover:bg-red-800': true,
      'focus:bg-red-300': true,
    },
    ligth: {
      'bg-gray-200': true,
      'hover:bg-gray-500': true,
      'focus:bg-gray-50': true,
      'text-gray-800': true
    },
    sky: {
      'bg-sky-500': true,
      'hover:bg-sky-900': true,
      'focus:bg-sky-500': true,
      'text-white': true
    },

  }

  get colors() { // Al ser un getters se ejecuta inmediatamente cuando la capa se carga
    const colors = this.mapColors[this.color];
    if (colors) {
      return colors
    }
    return {}
    // return {
    //   'text-white': this.color === 'success' || this.color === 'primary' || this.color === 'danger',
    //   'text-gray-800': this.color === 'gray-ligth',
    //   'bg-green-700': this.color === 'success',
    //   'hover:bg-green-800': this.color === 'success',
    //   'focus:bg-green-300': this.color === 'success',
    //   'bg-blue-700': this.color === 'primary',
    //   'hover:bg-blue-800': this.color === 'primary',
    //   'focus:bg-blue-300': this.color === 'primary',
    //   'bg-red-700': this.color === 'danger',
    //   'hover:bg-red-800': this.color === 'danger',
    //   'focus:bg-red-300': this.color === 'danger',
    //   'bg-gray-200': this.color === 'gray-ligth',
    //   'hover:bg-gray-500': this.color === 'gray-ligth',
    //   'focus:bg-gray-50': this.color === 'gray-ligth',
    // }
  }

}
