import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  // template: ` <h2>John Doe</h2> `,
  templateUrl: './user.component.html',
  styleUrls: ['./user.style.scss'],
})
export class UserComponent {
  firstName: string = 'John';
  lastName: string = 'Doe';
  age: number = 30;
  constructor() {
    console.log('Hello User');
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`);
  }
}
