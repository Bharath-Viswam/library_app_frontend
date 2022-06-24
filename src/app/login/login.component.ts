import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Credential } from '../signup/credentials';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User = new Credential("","")
  constructor(private authservice:AuthService,private router:Router ) { }

  ngOnInit(): void {
    console.log(this.authservice.loggedIn())
    if(this.authservice.loggedIn()){
      this.router.navigate(['Books'])
    }
  }
  Verify=()=>{
    this.authservice.login(this.User).subscribe((data)=>{
      localStorage.setItem('token',data.token)
      this.router.navigate(['Books'])
  
})
  }
}
