import { Component, signal } from '@angular/core';
import { MajorIndicesComponent } from "./components/major-indices/major-indices.component";
import { FooterComponent } from "./components/footer/footer.component";
import { DashboardContentComponent } from "./components/dashboard-content/dashboard-content.component";
import { AddStockModalComponent } from "./components/add-stock-modal/add-stock-modal.component";

@Component({
  selector: 'app-root',
  imports: [MajorIndicesComponent, FooterComponent, DashboardContentComponent, AddStockModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('stock-tracker');
}
