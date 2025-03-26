import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  //import required input from parent 
  //derived from signal, so it's a signal 
  products = input.required<Product[]>()


  //computed signal using input 
   filteredProducts = computed(()=>{
     return this.products().filter(product => product.name.includes("milk"))
   })





}
