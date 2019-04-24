import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

const baseUrl = 'https://insta.nextacademy.com/api/v1'

interface SignupResponse {
  auth_token: string
  message: string
  status: string
  user: BackendUser
}

interface BackendUser {
  id: number
  profile_picture: string
  username: string
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  inputs = new BehaviorSubject<string[]>([])
 
  constructor(private http: HttpClient) {}

  addInputs(newInput){
    debugger
    let tempInputs = this.inputs.getValue()
    tempInputs.push(newInput)
    this.inputs.next(tempInputs)
  }
  
  getInputs(){
    return this.inputs
  }

  getUsers() {
    return this.http.get(`${baseUrl}/users`)
  }

  getUserImages(userId: number) {
    return this.http.get(`${baseUrl}/images?userId=${userId}`)
  }

  submitSignUp(data: Object) {
    this.http.post(`${baseUrl}/users`, data).subscribe(response => {
      console.log(response)
    })
  }

  

  getProfile(data: Object) {
     return this.http.get(`${baseUrl}/profile`)
    // this.http.post(`${baseUrl}/profile`, data).subscribe(response => {
      //  console.log(response)
      //  debugger
    // })
  }


}
