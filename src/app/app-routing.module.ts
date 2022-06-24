import { BooksComponent } from './books/books.component';
import { Home1Component } from './home1/home1.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UpdatebooksComponent } from './updatebooks/updatebooks.component';


import { AddbookComponent } from './addbook/addbook.component';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:"",component:Home1Component},{path:"Books",component:HomeComponent},{path:"addbook",component:AddbookComponent},{path:"update",component:UpdatebooksComponent},{path:"Login",component:LoginComponent},{path:"Signup",component:SignupComponent},{path:"books",component:BooksComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
