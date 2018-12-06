import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'
import movies from './reducers/movies';

export default (history) => combineReducers({
    movies: movies,
    router: connectRouter(history),
})