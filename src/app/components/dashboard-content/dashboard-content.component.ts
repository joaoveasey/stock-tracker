import { Component } from '@angular/core';
import { StockTableComponent } from "../stock-table/stock-table.component";
import { AddStockButtonComponent } from "../add-stock-button/add-stock-button.component";

@Component({
  selector: 'app-dashboard-content',
  imports: [StockTableComponent, AddStockButtonComponent],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.css'
})
export class DashboardContentComponent {
  isModalOpen = false;

  onOpenModal() {
    this.isModalOpen = true;
  }
}
