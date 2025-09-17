import { Component, OnInit, output } from '@angular/core';
import { Stock } from '../../models/stock.model';
import { CommonModule } from '@angular/common';
import { CurrencyBrPipe } from '../../pipes/currency-br.pipe';
@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.css'],
  standalone: true,
  imports: [CommonModule, CurrencyBrPipe]
})
export class StockTableComponent implements OnInit {
  stocksData: Stock[] = [
    { id: 1, name: 'S&P 500', price: 4455.3, change: 0.22, open: 4455.7, high: 4462.0, low: 4438.5, prev: 4445.7 },
    { id: 2, name: 'US 100', price: 15179.8, change: -0.13, open: 15199.9, high: 15253.0, low: 15159.5, prev: 15199.9 },
  ];

  stockRemoved = output<number>();

  constructor() { }

  ngOnInit(): void {
  }

  removeStock(stockId: number): void {
    this.stocksData = this.stocksData.filter(stock => stock.id !== stockId);
    this.stockRemoved.emit(stockId);
  }
}