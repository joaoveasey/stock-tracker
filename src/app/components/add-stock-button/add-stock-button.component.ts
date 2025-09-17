import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-stock-button',
  imports: [],
  templateUrl: './add-stock-button.component.html',
  styleUrl: './add-stock-button.component.css'
})
export class AddStockButtonComponent {
 openModal = output<void>();

  onClick() {
    this.openModal.emit();
  }
}
