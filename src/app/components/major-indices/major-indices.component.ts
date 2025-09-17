import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyBrPipe } from "../../pipes/currency-br.pipe";

@Component({
  selector: 'app-major-indices',
  imports: [CommonModule, CurrencyBrPipe],
  templateUrl: './major-indices.component.html',
  styleUrl: './major-indices.component.css'
})
export class MajorIndicesComponent {
 indicesData = [
    { name: 'EUR/USD', price: 6.29, change: 0.42 },
    { name: 'IBOV', price: 144061.73, change: 0.36 },
    { name: 'IFIX', price: 3556.90, change: 0.28 },
    { name: 'BTC', price: 619.00, change: -0.03 },
    { name: 'IVVB11', price: 393.30, change: -0.49 },
    { name: 'NASDAQ', price: 15123.24, change: -0.56 },
    { name: 'DOW JONES', price: 34123.45, change: -0.78 },
    { name: 'S&P 500', price: 4321.67, change: -0.89 },
    { name: 'FTSE 100', price: 7123.45, change: -1.23 },
    { name: 'NIKKEI 225', price: 27456.78, change: -1.56 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
