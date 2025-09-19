export interface Stock {
  id: number;
  name: string;
  price: number;
  change: number;
  open: number;
  high: number;
  low: number;
  prev: number;
}

const MOCKED_STOCKS: Stock[] = [
  {
    id: 1,
    name: 'AAPL',
    price: 150,
    change: 1.2,
    open: 148,
    high: 152,
    low: 147,
    prev: 149
  },
  {
    id: 2,
    name: 'GOOGL',
    price: 2800,
    change: -15,
    open: 2810,
    high: 2820,
    low: 2790,
    prev: 2815
  },
  {
    id: 3,
    name: 'AMZN',
    price: 3400,
    change: 25,
    open: 3380,
    high: 3410,
    low: 3370,
    prev: 3375
  }
];
export const getMockedStocks = (): Stock[] => {
  return MOCKED_STOCKS;
}