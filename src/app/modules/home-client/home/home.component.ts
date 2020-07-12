import { Component, OnInit } from '@angular/core';
import { HomeService } from './../home.service'
import { Store, select } from '@ngrx/store'
import { getTest } from './../../../actions/index'
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private homeService: HomeService,
    private store: Store<any>
  ){}

  productTypes = [];
  banks = [];
  products = [];

  selectProduct = new FormGroup({
    product_select: new FormControl('', Validators.required),
    bank_select: new FormControl('BANCO_1', Validators.required)
  });

  ngOnInit(): void {
    console.log("This is a test...")
    this.store.dispatch({type: "GET_PRODUCS"})
    this.store.select('products').subscribe(response => {
      this.products = response.products.product
      response.products.product.map(p => {
        if( this.banks.indexOf(p.accountInformation.bank) < 0){
          this.banks.push(p.accountInformation.bank)
        }
        this.bankSelect("BANCO_1")
      })
    }) 
  }

  bankSelect(bank_select): void{
    this.productTypes = []
    this.products.map(p => {
      if(bank_select === p.accountInformation.bank || this.selectProduct.value.bank_select === p.accountInformation.bank){
        if( this.productTypes.indexOf(p.accountInformation.productType) < 0){
          this.productTypes.push(p.accountInformation.productType)
        }
      }
    })
  }

  productSelect(): void{
    console.log(this.selectProduct.value.product_select, this.selectProduct.value.bank_select)
    //debugger
  }

  onSubmit(): void {

  }

}
