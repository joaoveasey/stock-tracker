import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ModalServices } from '../../services/modal.services';
import { getMockedStocks, Stock } from '../../models/stock.model';

@Component({
  selector: 'app-add-stock-modal',
  imports: [CommonModule],
  templateUrl: './add-stock-modal.component.html',
  styleUrl: './add-stock-modal.component.css'
})
export class AddStockModalComponent {
  modalService = inject(ModalServices);

  stocks: Stock[] = getMockedStocks();

  onClose() {
    this.modalService.closeModal();
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.modalService.closeModal();
    }
  }

  onSelect() {
    console.log('Selected stock!');
    this.modalService.closeModal();
  }
}
