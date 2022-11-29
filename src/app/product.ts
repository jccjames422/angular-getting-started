export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
}

export let products = [
  { id: 1, name: 'Phone XL', price: '65.00', description: 'A large phone with one of the best screens' },
  { id: 2, name: 'Phone Mini', price: '88.50', description: 'A great phone with one of the best cameras' },
  { id: 3, name: 'Phone Standard', price: '899', description: '' }
];
