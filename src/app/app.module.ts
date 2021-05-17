import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './view/home/home.component';
import { ProductCrudComponent } from './components/product/product-crud/product-crud.component';
import { ROTAS } from './app.routes';
import { HttpClientModule } from '@angular/common/http'
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { ProductCreateComponent } from './components/product/product-create/product-create.component'
import { FormsModule }from '@angular/forms';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
// import localePt from "@angular/common/locales/pt"
// import { registerLocaleData } from "@angular/common"
// registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    
  ],
  imports: [
  BrowserModule,
  RouterModule.forRoot(ROTAS),
  HttpClientModule,
  FormsModule,
  BrowserAnimationsModule,

  
  ],
  providers: [
    // {provide:LOCALE_ID,
    // useValue: 'PT-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
