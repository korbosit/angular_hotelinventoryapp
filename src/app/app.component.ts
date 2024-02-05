import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
}
