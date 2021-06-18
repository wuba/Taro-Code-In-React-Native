import { COUNT_ADD, COUNT_SUB } from '../actions/actionTypes'

export const initialState = {
    des: '测试initialState',
    count: 0
}

export default function counter(state = initialState, action) {
    switch (action.type) {
        case COUNT_ADD:
            return {
                ...state,
                count: state.count + action.num
            }
            break;
        case COUNT_SUB:
            return {
                ...state,
                count: state.count + action.num
            }
            break;
        default:
            return {
                ...state,
                count: 0,
            }
    }
}