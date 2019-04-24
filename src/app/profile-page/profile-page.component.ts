import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { FormControl, FormGroup } from '@angular/forms'
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit { 
  //  editProfile = new BehaviorSubject<string[]>([])


  profileForm = new FormGroup({
  username: new FormControl('ngjwen'),
  description: new FormControl('Welcome to my page.'),
  blog: new FormControl('http://www.jwen.blogspot.com'),
  facebook: new FormControl('https://www.facebook.com/jwen89'),
  email: new FormControl('jwen@gmail.com'),
})

  constructor(private service: UserService) { }

  ngOnInit() {
  }

  clickEdit(data) {
    
     data = this.profileForm.value
    this.service.getProfile(data)

 console.log(this.profileForm.value)
    debugger
  }


}
