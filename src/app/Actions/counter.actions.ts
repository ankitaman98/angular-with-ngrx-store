import { createAction } from '@ngrx/store';
import {INCREMENT, DECREMENT, RESET} from '../Action-Types/counter.action.type';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const reset = createAction(RESET);