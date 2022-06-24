import { BookServiceService } from './../book-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from './booksmodel';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  pageTitle:String = "Product-list";
  // products: ProductModel[] | any;
  products = [new ProductModel("", "", "", "",0)];
  
  // products=[{
  //   productId :'',
  //   productName:'',
  //   productCode:'',
  //   releasedate:'',
  //   description:'',
  //   price:'',
  //   rating:'',
  //   imageURL:''}]
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  constructor(private productService:BookServiceService,private router:Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products = JSON.parse(JSON.stringify(data))
    })
  }
 
  editProduct(product:any)
  {
    localStorage.setItem("editProductId", product._id.toString());
    this.router.navigate(['update']);

  }
  deleteProduct(product:any)
  {
    this.productService.deleteProduct(product._id)
      .subscribe((data) => {
        this.products = this.products.filter((p: any) => p !== product);
      })
  

  }
}

