import { Component, inject, output } from '@angular/core';
import { ModalServices } from '../../services/modal.services';

@Component({
  selector: 'app-add-stock-button',
  imports: [],
  templateUrl: './add-stock-button.component.html',
  styleUrl: './add-stock-button.component.css'
})
export class AddStockButtonComponent {
  private modalService = inject(ModalServices);

  onClick() {
    console.log('Button clicked!');
    this.modalService.openModal();
  }
}
