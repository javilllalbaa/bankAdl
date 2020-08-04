import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCardComponent } from '../modal-card/modal-card.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ProductModel;
  modalRef: any;

  constructor(
    private modalService: NgbModal) { }

  ngOnInit(): void { }

  progressBar(e): Number{
    return parseInt(e)
  }

  open(product) {
    this.modalRef = this.modalService.open(ModalCardComponent);
    this.modalRef.componentInstance.product = product;
    this.modalRef.componentInstance.closeMyModal = () => {
      this.modalRef.close();
    }
  }


}
