import { Action, State, createReducer, on } from '@ngrx/store'
import { Data } from './../mockup/data'
import { responseData } from './product.action'

export const initialState = {products: []};

const featureReducer = createReducer(
    initialState,
    on(responseData, (state, { payload }) => ({
      ...state,
      products: payload
    }))
  );
  
  export function Reducer(
    state: any,
    action: Action
  ): any {
    return featureReducer(state, action);
  }