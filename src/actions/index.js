export const GET_TEST_LIST ='GET_TEST_LIST';

export function getTestList(){
    const arr = ['test1','test2','test3'];
    return {
        type : GET_TEST_LIST,
        payload: arr,
    }
}