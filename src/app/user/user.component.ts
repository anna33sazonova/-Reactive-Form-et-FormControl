import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../user.models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {

 
    username = new FormControl('');
    email = new FormControl('');
    password = new FormControl('');
    street =  new FormControl('');
    zip = new FormControl('');
    city = new FormControl('');
  


  onSubmit() {
    console.log(this.username.value, this.email.value, this.password.value, this.street.value, this.zip.value, this.city.value);
  }

}
