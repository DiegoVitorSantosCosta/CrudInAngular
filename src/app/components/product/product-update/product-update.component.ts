import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../sevice/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export  class  ProductUpdateComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router,private route: ActivatedRoute) { } // o activatedRoute permite pegar um parametro id passado na url

  
  ngOnInit(): void {
    // essa é a sequecia para pegar o parametro id da url, esse id foi definido nas rotas.
    const id = this.route.snapshot.paramMap.get('id')
    // readById vai ser usado para trazer os dados do service para a edição
    this.productService.readById(id)
    .subscribe(resProduct =>{
      this.product = resProduct
      console.log(this.product);
      
    })
    
    
  }
  product: Product

  updateProduct(): void{
     this.productService.update(this.product)
     .subscribe(()=>{
       alert('Produto atualizado com sucesso !')
       this.router.navigate(['productCrud'])
     })

  }
  cancel(): void{
    this.router.navigate(['productCrud'])

  }
}
