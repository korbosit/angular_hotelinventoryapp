import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
// import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-root',
  standalone: true,
  // imports: [RouterOutlet, RoomsComponent, NgSwitch, NgSwitchCase],
  imports: [RouterOutlet, RoomsComponent, CommonModule],
  templateUrl: './app.component.html',
  // template: `<h1>Hello world from inline template</h1>
  //   <p>Angular is Awesome</p> `,
  styleUrl: './app.component.scss',
  // styles: [
  //   `
  //     h1 {
  //       color: red;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  title = 'hotelinventoryapp';
  role = 'Admin';
}
