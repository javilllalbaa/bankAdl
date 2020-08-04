import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductModel } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss']
})
export class ModalCardComponent implements OnInit {

  @Input() closeMyModal: (any) => void;
  @Input() product: ProductModel;
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    console.log("product...", this.product)
  }

  progressBar(e): Number{
    return parseInt(e)
  }

}
