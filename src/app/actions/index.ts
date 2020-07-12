
import { createAction } from '@ngrx/store';

export const getData = (data) => ({
    type: "REQUEST_GETS_DATA",
    creditCard: data
})

export const getTest = () => (dispatch) => {
    var b = {
        "text": "test"
    }
    dispatch(getData(b))
}