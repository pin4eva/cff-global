import { Component, OnInit } from '@angular/core';

interface IUser {
  firstName: string;
  lastName: string;
  age: number;
  address?: {
    street: string;
    city: string;
  };
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: IUser[];
  isLoading: boolean = true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.users = [
        {
          firstName: 'Peter',
          lastName: 'Akaliro',
          age: 30,
          address: {
            street: '112 Item Road',
            city: 'Aba',
          },
        },
        {
          firstName: 'Amara',
          lastName: 'Ugwu',
          age: 30,
          address: {
            street: '112 Item Road',
            city: 'Aba',
          },
        },
      ];
      this.isLoading = false;
    }, 2000);
  }
}
