import { type } from '@testing-library/user-event/dist/type';
import * as actionTypes from './actionTypes';


export const increaseCounter =() =>( {
    type:actionTypes.INCREASE_COUNTER,
    payoad:1
});

export const decreaseCounter =() => ({
    type:actionTypes.DECREASE_COUNTER,
    payload:1

});

export const increaseByTwoCounter =() => ({
    type:actionTypes.INCREASE_BY_TWO_COUNTER,
    payload:2

});