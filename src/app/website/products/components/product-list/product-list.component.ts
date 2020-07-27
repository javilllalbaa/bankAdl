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

  showProductsFilter(event):void {
    this.products$ = this.store.select((data) => {
      return data.products.products.product.filter(p => p.accountInformation.productType === event.product_select && p.accountInformation.bank === event.bank_select)
    })
  }

  changeSeletedProduct(event){
    debugger
  }

}
