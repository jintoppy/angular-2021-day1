import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user.component.html',
  styleUrls: ['./selected-user.component.css'],
})
export class SelectedUserComponent implements OnInit {
  @Input()
  user?: User;

  constructor() {}

  ngOnInit(): void {}
}
