import { Component, effect, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'signal-practice';

  theme = signal('light');

  label = this.theme()
  ngOnInit(): void {
    //update via hardcode
    this.theme.set('dark')
    //update via flip 
    this.theme.update((currentVal)=> currentVal === 'light'? 'dark' : 'light')
    document.body.className = this.theme()
  }

  constructor(){
    //when this signal changes, do this logic
    //just set label again to be updated 
    effect(()=>{
      this.label = this.theme()
    })
  }




}
