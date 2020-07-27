import { createAction, props} from '@ngrx/store';
import { ProductModel } from '../../core/models/product.model';

export const resquestData = createAction(
    'REQUEST_DATA',
);

export const responseData = createAction(
    'RESPONSE_DATA',
    props<{ payload: ProductModel[] }>()
);

export const responseBank = createAction(
    'RESPONSE_BANK',
    props<{ payload: ProductModel[] }>()
);

export const responseProductType = createAction(
    'RESPONSE_PRODUCT_TYPE',
    props<{ bankSelected: string }>()
);