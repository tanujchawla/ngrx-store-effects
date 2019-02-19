import * as fromPizzas from '../actions/pizzas.actions';

import { Pizza } from 'src/products/models/pizza.model';

export interface PizzaState {
    data : Pizza[],
    loaded : boolean,
    loading : boolean
}

export const initialState : PizzaState = {
    data: <any>[],
    loaded: false,
    loading: false
};

export function reducer(state = initialState, action : fromPizzas.PizzaAction) : PizzaState {
    switch(action.type) {
        case fromPizzas.LOAD_PIZZAS : {
            return {
                ...state,
                loading : true
            };
        }

        case fromPizzas.LOAD_PIZZAS_SUCCESS : {
            return {
                ...state,
                loading : false,
                loaded : true
            };
        }

        case fromPizzas.LOAD_PIZZAS : {
            return {
                ...state,
                loading : false,
                loaded : false
            };
        }
    }

    return state;
} 