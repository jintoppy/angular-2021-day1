import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  constructor() {}

  @Output()
  onAddUser = new EventEmitter();

  ngOnInit(): void {}

  onSubmit(formCtrl: any) {
    console.log(formCtrl.form.value);
    if (formCtrl.valid) {
      console.log('form submitted');
      this.onAddUser.emit(formCtrl.form.value);
    }
  }
}
