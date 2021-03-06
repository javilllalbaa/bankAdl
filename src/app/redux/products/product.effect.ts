import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { resquestData, responseData, responseBank } from './product.action';
import { switchMap, map, mergeMap } from 'rxjs/operators';
import { ProductService } from '../../core/services/product.service';

@Injectable()
export class ProductEffects {

    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) {}
 
    productsEfect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(resquestData),
            switchMap(() => this.productService.getJSON().pipe(
                mergeMap((payload) => [
                    responseData({ payload }),
                    responseBank({ payload }),
                  ])
            ))
            // switchMap(() => this.productService.getJSON().pipe(
            //     map((payload)=> responseData({ payload }))
            // ))
        )   
    });
}

