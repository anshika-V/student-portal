import {combineReducers} from 'redux';
import testList from './listReducer';
import test from './testReducers';

const root = combineReducers({
    testList ,
    test,
});

export default root;