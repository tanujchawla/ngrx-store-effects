import * as fromPizzas from './pizzas.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface ProductState {
    pizzas : fromPizzas.PizzaState
}

export const reducers : ActionReducerMap<ProductState> = {
    pizzas : fromPizzas.reducer
};