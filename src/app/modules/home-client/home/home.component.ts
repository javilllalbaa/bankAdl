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
    bank_select: new FormControl('BANCO_2', Validators.required)
  });

  ngOnInit(): void {
    console.log("This is a test...")
    this.store.dispatch({type: "GET_PRODUCS"})
    this.store.select('products').subscribe(response => {
      response.products.product.map(p => {
        if( this.banks.indexOf(p.accountInformation.bank) < 0){
          this.banks.push(p.accountInformation.bank)
        }
        this.bankSelect("BANCO_2")
        //this.products = response.products.product.filter(p => p.accountInformation.bank === "BANCO_1")
      })
    })
    setTimeout(function(){ 
      console.log("height...", screen.height)
      var contenedor = document.getElementsByClassName("contenedor");
      var height = screen.height - 230
      contenedor[0]['style'].height = height + "px"
      contenedor[0]['style']['overflow-y'] = "scroll"
      contenedor[0]['style']['overflow-x'] = "hidden"
    }, 500);
  }

  bankSelect(bank_select): void{
    this.productTypes = []
    this.store.select('products').subscribe(response => {
      response.products.product.map(p => {
        if(bank_select === p.accountInformation.bank || this.selectProduct.value.bank_select === p.accountInformation.bank){
          if( this.productTypes.indexOf(p.accountInformation.productType) < 0){
            this.productTypes.push(p.accountInformation.productType)
          }
          this.products = response.products.product.filter(p => p.accountInformation.bank === bank_select || p.accountInformation.bank === this.selectProduct.value.bank_select )
        }
      })
    })
  }

  productSelect(): void{
    this.store.select('products').subscribe(response => {
      response.products.product.map(p => {
        this.products = response.products.product.filter(p => p.accountInformation.productType === this.selectProduct.value.product_select && p.accountInformation.bank === this.selectProduct.value.bank_select )
      })
    })
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
      default:
      return ""
  }
    if(text == "DEPOSIT_ACCOUNT"){
      return "Cuenta deposito"
    }else
    return "Hola"
  }

  progressBar(e): Number{
    return parseInt(e)
  }

  onSubmit(): void {
  }

}
