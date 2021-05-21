import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent implements OnInit {
  @Input()
  details?: User;

  @Output()
  onUserView = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onBtnClick() {
    this.onUserView.emit(this.details);
  }
}
