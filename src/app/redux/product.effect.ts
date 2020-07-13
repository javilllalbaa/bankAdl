import { Injectable } from '@angular/core';
import { HomeService } from './../modules/home-client/home.service' 
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { resquestData, responseData } from './product.action';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class ProductEffects {

    constructor(
        private actions$: Actions,
        private homeService: HomeService
    ) {}
 
    productsEfect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(resquestData),
            switchMap(() => this.homeService.getJSON().pipe(
                map((payload)=>responseData({payload}))
            ))
        )   
    });
}