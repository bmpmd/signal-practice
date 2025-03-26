import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-computed-component',
  standalone: true,
  imports: [],
  templateUrl: './computed-component.component.html',
  styleUrl: './computed-component.component.css'
})
export class ComputedComponentComponent {

  //reg number 
  price = 17;
  //signal of type number 
  quantity = signal(10)

  //computed signal, listens for changes on signal
  //(quantity) and changes based on passed computation

  totalPrice = computed(()=>
    this.price * this.quantity()
  )


  //method that changes quantity 
  //based on input
  changeQuantity(event: Event){
    this.quantity.set((event.target as HTMLInputElement).valueAsNumber)
  }

}
