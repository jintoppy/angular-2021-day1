import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private users: User[] = [
    {
      id: 1,
      firstName: 'Ram',
      lastName: 'Charan',
    },
    {
      id: 2,
      firstName: 'Ravi',
      lastName: 'Teja',
    },
    {
      id: 3,
      firstName: 'Allu',
      lastName: 'Arjun',
    },
  ];
  constructor() {}
  getUsers() {
    return this.users;
  }

  addUser(newUser: User) {
    const lastItem = this.users[this.users.length - 1];
    const newId = lastItem.id ? lastItem.id + 1 : 0;
    const updatedNewUser = {
      id: newId,
      ...newUser,
    };
    this.users.push(updatedNewUser);
  }
}
