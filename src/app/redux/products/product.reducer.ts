import { Action, State, createReducer, on } from '@ngrx/store'
import { responseData, responseBank, responseProductType } from './product.action'
import { ProductModel } from './../../core/models/product.model'

export interface ProductsState {
    products: ProductModel[],
    bank: string[],
    productTypes: string[] 
}

export const initialState = { 
  products: [],
  bank: [],
  productTypes: [] 
};

const featureReducer = createReducer(
    initialState,
    on(responseData, (state, { payload }) => ({
        ...state,
        products: payload
    })),
    on(responseBank, (state, { payload }) => {
        var banks = []
        payload['product'].map(p => {
            if( banks.indexOf(p.accountInformation.bank) < 0){
                banks.push(p.accountInformation.bank)
            }
        })
        return { 
            ...state,
            bank: banks 
        };
    }),
    on(responseProductType, (state, { bankSelected }) => {
        var productTypes = []
        state.products['product'].map(p => {
            if(bankSelected === p.accountInformation.bank){
                if(productTypes.indexOf(p.accountInformation.productType) < 0){
                    productTypes.push(p.accountInformation.productType)
                }
              }
        })
        return { 
            ...state,
            productTypes: productTypes
        };
    })
);
  
export function reducer( state: any, action: Action): any {
    return featureReducer(state, action);
}