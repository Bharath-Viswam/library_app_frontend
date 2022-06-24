import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public http:HttpClient) { }
  login(authData:any){
    return this.http.post<any>(`http://localhost:3000/login`,authData)
  
    }
    loggedIn(){
      return !!localStorage.getItem('token')
      
    }
    getToken(){
      
      return localStorage.getItem('token')
    }
  saveCred(userData:any)
  {
    console.log(userData.email)
    console.log(userData.password)
    return this.http.post("http://localhost:3000/signup",userData).subscribe()
    
  }
 
}
