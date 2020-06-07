import {combineReducers} from 'redux';
import testList from './listReducer';

const root = combineReducers({
    testList
});

export default root;