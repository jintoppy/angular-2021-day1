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
}
