import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComputedComponentComponent } from './computed-component/computed-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ComputedComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'signal-practice';

  theme = signal('light');

  

  //product list 
  products = signal([
    {id: 1, name: "milk", price:1.50},
    {id: 2, name: "eggs", price:9.50},
    {id: 3, name: "bread", price:2.50},
  ])

  //filtername signal
  filterName = signal('')

  //filtered products computed signal 
  filteredProducts = computed(()=>{
    return this.products()
    .filter(product => product.name
      .toLowerCase()
      .includes(this.filterName().toLowerCase())
     )
  })

  //change filter method
  //get filtername on change 
  changeFilter(event: Event){
    let newFilter = (event.target as HTMLInputElement).value
    this.filterName.set(newFilter)
  }

  label = this.theme()
  ngOnInit(): void {
    //update via hardcode
    this.theme.set('dark')
    
    document.body.className = this.theme()
  }

  constructor(){
    //when this signal changes, do this logic
    //just set label again to be updated 
    effect(()=>{
      this.label = this.theme()
    })
  }

  toggleDarkMode(){
    //update via flip 
    this.theme.update((currentVal)=> currentVal === 'light'? 'dark' : 'light')
  }




}
