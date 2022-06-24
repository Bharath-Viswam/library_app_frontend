import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Credential } from './credentials';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userCred = new Credential("","")
  ngOnInit(): void {
  }
  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router) { }

  signupForm = this.fb.group(
    {name:[''],
      email: ['',[Validators.pattern('^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$'),Validators.required]],
      password: ['',[Validators.required,Validators.minLength(8)]]
    }
  )
 
  signUpUser(){
    this.authService.saveCred(this.userCred)
  
        this.router.navigate(['Login'])
      }
}
