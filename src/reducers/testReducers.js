import {
    GET_TEST, SHOW_ANSWER,
} from '../actions';

const defaultState ={
    marks : 0,
    question : "1",
    answer : "2",
    type : "one word",
    options : [1,2,3,4],
    showAnswer : 0,
}

export default function (state=defaultState,actions){
    switch(actions.type) {
        case GET_TEST :
            return {
                ...state,
                marks : actions.payload.marks,
                question : actions.payload.question,
                answer : actions.payload.answer,
                type : actions.payload.type,
                options : actions.payload.options,
                showAnswer : actions.payload.showAnswer,
            };
        case SHOW_ANSWER :
            return {
                ...state,
                showAnswer : actions.payload.showAnswer
            }
        default :
            return state ;
        }
}