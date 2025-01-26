import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  selectedUser = signal(DUMMY_USERS[this.randomNumber]);
  imgPath = computed(() => '/' + this.selectedUser().avatar);

  // get imgPath(){
  //   return '/' + this.selectedUser().avatar;
  // }

  get randomNumber(){
   return  Math.floor(Math.random() * DUMMY_USERS.length)
  }

  clicked(){
    this.selectedUser.set(DUMMY_USERS[this.randomNumber]);
  }

}
