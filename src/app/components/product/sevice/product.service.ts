import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  endpoint = "http://localhost:3000/products"

  constructor(private http: HttpClient) { }

  showMessage(msg : string):void{
    alert(msg)
}
/// metodo para cadastrar produtos
create(product: Product):Observable<Product>{
  return this.http.post<Product>(this.endpoint,product)

}

// obter produtos para listar na tela
read(): Observable<Product[]>{
  return this.http.get<Product[]>(this.endpoint)
}


readById(id: string):Observable <Product>{
  const url = `${this.endpoint}/${id}`
  return this.http.get<Product>(url)
}

update(product: Product): Observable <Product>{

  const url = `${this.endpoint}/${product.id}`

  return this.http.patch<Product>(url,product)

}
// esse delete é chamado no componente product-read.component.ts
delete(id: string):Observable <Product>{
  const url = `${this.endpoint}/${id}`

    return this.http.delete<Product>(url)
}

}
