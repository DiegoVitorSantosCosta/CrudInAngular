import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../sevice/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private router: Router, private productService : ProductService,private route: ActivatedRoute) { }

  product: Product
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    this.productService.readById(id)
    .subscribe(res =>{
      this.product = res 
      
    })
    
  }

  delete(){
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.delete(id)
    .subscribe(res=>
      this.product = res
      )
      this.router.navigate(['productCrud'])
  }
    cancel(){
      this.router.navigate(['productCrud'])

    }

}
