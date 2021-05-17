import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductService } from '../sevice/product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  
  constructor(private productService: ProductService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.productService.read()
    .subscribe(resProducts =>{
      
      this.products = resProducts;
      
    })
  }
  

}
