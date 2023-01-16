import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile-component.component.html',
  styleUrls: ['./user-profile-component.component.css']
})
export class UserProfileComponentComponent {
  user: User = new User("N'GUESSAN","Marina", "assets/photo.jpg");

  getFullName(): string {
    return `${this.user.firstName} ${this.user.lastName}`
  }
}
