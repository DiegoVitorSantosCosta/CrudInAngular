import { Routes } from "@angular/router";

import { HomeComponent } from './view/home/home.component';
import { ProductCrudComponent } from './components/product/product-crud/product-crud.component';
import { NavComponent } from './nav/nav.component';
import { ProductCreateComponent } from "./components/product/product-create/product-create.component";
import { ProductUpdateComponent } from "./components/product/product-update/product-update.component";
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

export const ROTAS : Routes = [
    { path:'',component:HomeComponent },
    { path:'productCrud',component:ProductCrudComponent },
    { path:'nav',component:NavComponent },
    { path:'productCreate',component:ProductCreateComponent },
    //colocando /:id, ele manda um parâmetro consigo, neste caso o id o produto.
    { path: 'product/update/:id',component: ProductUpdateComponent},
    { path: 'product/delete/:id',component: ProductDeleteComponent},


]