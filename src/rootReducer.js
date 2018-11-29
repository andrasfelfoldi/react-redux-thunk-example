import {combineReducers} from 'redux';
import movies from './reducers/movies';
import network from './reducers/network';

export default combineReducers({
    movies,
    network
})