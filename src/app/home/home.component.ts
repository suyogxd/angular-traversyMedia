import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeMessage = signal("Greetings, Suyog!")
  
// event listerners //
  handleKeyUp(event: KeyboardEvent ){
    console.log(`User pressed ${event.key} key.`)
  }
}
