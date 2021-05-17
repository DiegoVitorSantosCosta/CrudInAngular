import { Component, OnInit } from '@angular/core';
import { ProductService } from '../sevice/product.service';
import { Router } from '@angular/router'
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService : ProductService,private routes: Router) { }

  ngOnInit(): void {

  }
 // esse atributo é criado para receber os dados vindo do formulario, para isso usamos o two awy data binding, [(ngModel)] = product.name ou product.price
  product: Product = {
    name: '',
    price: null
  }
  createProduct():void{
    this.productService.create(this.product)

    .subscribe(res =>{ // o metodo subscribe seremos notificados quando a resposta chegar
      console.log(res);
      
      this.productService.showMessage("Produto salvo com sucesso !")
      this.routes.navigate(['productCrud'])

    })

  }
  cancel():void{
    this.routes.navigate(['productCrud'])
  }


}
