import { createAction, props} from '@ngrx/store';

export const resquestData = createAction(
    'REQUEST_DATA',
);

export const responseData = createAction(
    'RESPONSE_DATA',
    props<{ payload: any }>()
);