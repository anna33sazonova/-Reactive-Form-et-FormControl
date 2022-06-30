import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../user.models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {

 user: User = new User ("", "", "", "", "", "")
  
    username = new FormControl('');
    email = new FormControl('');
    password = new FormControl('');
    street =  new FormControl('');
    zip = new FormControl('');
    city = new FormControl('');
  


  onSubmit() {
    this.user = new User(this.username.value!, this.email.value!, this.password.value!, this.street.value!, this.zip.value!, this.city.value!);
  }

}
