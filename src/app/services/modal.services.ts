import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalServices {
  isModalOpen = signal(false);

  openModal() {
    console.log('Opening modal...');
    this.isModalOpen.set(true);
    console.log(this.isModalOpen());
  }

  closeModal() {
    console.log('Closing modal...');
    this.isModalOpen.set(false);
  }
}
