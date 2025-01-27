import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { CommonModule } from '@angular/common';
//decorator , to add metadata to the class
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-practice';
  users = DUMMY_USERS;
  selectedUser = '';
  selectedUserName = '';

  Selected(event:string){
    this.selectedUser = this.users.filter(u=> u.id === event)[0].id;
    this.selectedUserName = this.users.filter(u=> u.id === event)[0].name;
  }
}
