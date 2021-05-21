import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { SelectedUserComponent } from './components/selected-user/selected-user.component';
import { CustomClickDirective } from './custom-click.directive';
import { AddUserComponent } from './components/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    SelectedUserComponent,
    CustomClickDirective,
    AddUserComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
