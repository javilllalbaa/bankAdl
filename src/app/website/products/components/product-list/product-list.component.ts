import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductModel } from './../../../../core/models/product.model'
import { resquestData } from 'src/app/redux/products/product.action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$: Observable<ProductModel>

  constructor(
    private store: Store<any>
  ){
    this.store.dispatch(resquestData());
    this.products$ = this.store.select((data) => data.products.products.product)
  }

  ngOnInit(): void {
    setTimeout(function(){ 
      var contenedor = document.getElementsByClassName("contenedor");
      var height = screen.height - 230
      contenedor[0]['style'].height = height + "px"
      contenedor[0]['style']['overflow-y'] = "scroll"
      contenedor[0]['style']['overflow-x'] = "hidden"
    }, 500);
  }

  chanceProductTypes(text): string{
    switch (text) {
      case "DEPOSIT_ACCOUNT":
        return "Cuenta deposito"
      case "CREDIT_CARD":
        return "Tarjeta de credito"
      case "CREDIT":
        return "Credito"
      case "CERTIFIED_DEPOSIT_TERM":
        return "Certificado de deposito"
      case "CURRENT_ACCOUNT":
        return "Cuenta actual"
      default:
      return ""
    }
  }

  showProductsFilter(event):void {
    this.products$ = this.store.select((data) => {
      return data.products.products.product.filter(p => p.accountInformation.productType === event.product_select && p.accountInformation.bank === event.bank_select)
    })
  }

  progressBar(e): Number{
    return parseInt(e)
  }

  open(product) {
    // this.products = this.products.map(p => {
    //   if(p.id == product.id && p.selected == false){
    //     return Object.assign({}, p, { selected : true })
    //   }else{
    //     return Object.assign({}, p, { selected : false })
    //   } 
    // })
  }

}
