import { BookServiceService } from './../book-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../books/booksmodel';
@Component({
  selector: 'app-updatebooks',
  templateUrl: './updatebooks.component.html',
  styleUrls: ['./updatebooks.component.css']
})
export class UpdatebooksComponent implements OnInit {

  constructor(private router:Router,private productService:BookServiceService) { }
  productItem = new ProductModel("", "", "", "",0);
  ngOnInit(): void {
    let productId = localStorage.getItem("editProductId");
    this.productService.getProduct(productId).subscribe((data)=>{
      this.productItem=JSON.parse(JSON.stringify(data));
  })
  }
  editProduct()
  {    
    this.productService.editProduct(this.productItem);   
    alert("Success");
    this.router.navigate(['books']);
}
}


