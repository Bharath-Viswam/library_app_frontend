import { Router } from '@angular/router';
import { BookServiceService } from './../book-service.service';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../books/booksmodel';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private productService:BookServiceService,private router:Router) { }
  productItem = new ProductModel("", "", "", "",0);
  ngOnInit(): void {
  }
  NewProduct() {
    this.productService.addProducts(this.productItem);
    console.log("Called");
    alert("New Product Added");
    this.router.navigate(['books']);
  }
}

