import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from './../../../../redux'
import { Observable } from 'rxjs';
import * as productActions from '../../../../redux/products/product.action';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  selectProduct = new FormGroup({
    product_select: new FormControl('', Validators.required),
    bank_select: new FormControl('BANCO_1', Validators.required)
  });

  banks$: Observable<any>;
  productType$: Observable<any>
  banks = [];

  @Output() showProducts = new EventEmitter();


  constructor(
    private store: Store<State>
  ) {
    this.banks$ = this.store.select((data) => data.products.bank);
    this.productType$ = this.store.select((data) => data.products.productTypes);
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

  bankSelect(): void{
    var bankSelected: string = this.selectProduct.value.bank_select
    this.store.dispatch(productActions.responseProductType({ bankSelected }));
  }

  productSelect(): void {
    this.showProducts.emit(this.selectProduct.value);
  }

  onSubmit(): void {
  }

}
