import { Component, OnInit } from '@angular/core';
import { signal, effect, computed } from '@angular/core';

@Component({
  selector: 'app-signal-component',
  standalone: false,
  templateUrl: './signal-component.component.html',
  styleUrls: ['./signal-component.component.css']
})
export class SignalComponentComponent implements OnInit {
  theme = signal('light');
  label = this.theme().toUpperCase() + ' MODE';

  price = 10;
  quantity = signal(1);
  totalPrice = computed(() => this.price * this.quantity());


  products = signal(
    [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 30 },
    ]);

  filterName = signal('');

  filteredProducts = computed(() => {
    const filter = this.filterName().toLowerCase();
    return this.products().filter(product => product.name.toLowerCase().includes(filter));
  })

  changeFilterName(event: any): void {
    let newFilterName = (event.target as HTMLInputElement).value;
    console.log('New filter name:', newFilterName);

    this.filterName.set(newFilterName);
  }

  onChangeQuantity(event: any): void {
    this.quantity.set(event.target.value);
  }

  ngOnInit(): void {
    // // set the value of the signal to 'dark'
    // // this.theme.set('dark'); // version 1
    // this.theme.set(this.theme() === 'dark' ? 'light' : 'dark'); // version 2

    // // update the value of the signal based on the current value - version 3
    // this.theme.update(currentTheme => currentTheme === 'light' ? 'dark' : 'light');

    // document.body.className = this.theme();
  }

  toggleTheme(): void {
    this.theme.update(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
    document.body.className = this.theme();
  }

}
