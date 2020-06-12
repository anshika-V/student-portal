export const GET_TEST_LIST ='GET_TEST_LIST';
export const GET_TEST ='GET_TEST';
export const SHOW_ANSWER ='SHOW_ANSWER';

export function getTestList(){
    const arr = ['test1','test2','test3'];
    return {
        type : GET_TEST_LIST,
        payload: arr,
    }
}
const test = {
    marks : 50,
    question : "question",
    answer : "ans",
    type : "single choice",
    options : [1, 2 , 3, 40],
    showAnswer : 0,
};
export function getTest(id){
    //fetch data
    return {
        type : GET_TEST,
        payload : test,
    }
}
export function show(value){
    test.showAnswer = value;
    return {
        type : SHOW_ANSWER,
        payload : test.showAnswer,
    }
}
