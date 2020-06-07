import {
    GET_TEST_LIST,
} from '../actions';

const defaultState ={
    test : ['0'],

}

export default function (state=defaultState,actions){
    switch(actions.type) {
        case GET_TEST_LIST :
            return {
                ...state,
                test : [...state.test,...actions.payload]
            };
        default :
            return state ;
        }
}