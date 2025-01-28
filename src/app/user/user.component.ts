import { Component, computed, EventEmitter, input, Input, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: false,
  //imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input({required: true}) avatar!: string;
  @Input() name!: string;
  @Input() isSelected!: boolean;
  @Input() id!: string;
  @Output() select = new EventEmitter<string>();

  //  avatar = input.required<string>();
  //  name = input.required<string>();
  selectedUser = signal(DUMMY_USERS[this.randomNumber]);
  // imgPath = computed(() => {
  //   return '/' + this.avatar()});

  get imgPath(){
    console.log(this.selectedUser().avatar);
    return '/' + this.avatar;
  }

  get randomNumber(){
   return  Math.floor(Math.random() * DUMMY_USERS.length)
  }

  clicked(){
    //this.selectedUser.set(DUMMY_USERS[this.randomNumber]);
    this.select.emit(this.id);
  }

}
