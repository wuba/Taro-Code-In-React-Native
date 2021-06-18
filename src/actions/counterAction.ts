import { COUNT_ADD, COUNT_SUB } from './actionTypes'

export const countAdd = (num) => {
    return {
        type: COUNT_ADD,
        num:num
    }
}

export const countSub = (num) => {
    return {
        type: COUNT_SUB,
        num:num
    }
}