import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from './app.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: User[] = [];
  selectedUser?: User;
  enabled = true;
  myInputVal = '';
  constructor(private appService: AppService) {
    this.users = this.appService.getUsers();
  }

  onUserSelect(userDetails: User) {
    this.selectedUser = userDetails;
  }

  onBtnClick(ngModelCtrl: any) {
    this.enabled = !this.enabled;
    this.myInputVal = 'updated';
  }

  onAddUser(newUser: User) {
    this.appService.addUser(newUser);
    this.users = this.appService.getUsers();
  }
}
