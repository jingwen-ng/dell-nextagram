import { Component, OnInit } from '@angular/core'
import { UserService } from '../user.service'
import { ActivatedRoute } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  images: string[] = []
  username: string
 inputs = []
  likeClick=0

  todo = new FormGroup({
    comment: new FormControl("")
  })

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const userId = this.route.snapshot.params.userId
    this.username = this.route.snapshot.params.username
    
    this.userService.getUserImages(userId).subscribe(response => {
      this.images = response as string[]
    })

    debugger
    this.userService.getInputs().subscribe(inputs => {
      this.inputs = inputs
    })
  }

  onSubmit(){
    if(!this.todo.invalid){
      this.userService.addInputs(this.todo.value)
      debugger
    }
    this.todo.reset();
  }

  onClick(){
    this.likeClick+=1
    } 
}
