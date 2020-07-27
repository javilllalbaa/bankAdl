import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ProductModel;

  constructor() { }

  ngOnInit(): void { 
    //debugger
    console.log("product...", this.product)
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

  progressBar(e): Number{
    return parseInt(e)
  }

  open(product) {
  }

}
