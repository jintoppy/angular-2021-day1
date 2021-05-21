import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { SelectedUserComponent } from './components/selected-user/selected-user.component';

@NgModule({
  declarations: [AppComponent, UserItemComponent, SelectedUserComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
