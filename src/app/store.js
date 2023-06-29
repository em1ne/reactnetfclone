import { createStore, combineReducers, applyMiddleware } from 'redux';
import { movieReducer } from './reducers/movieReducers';
import thunk from 'redux-thunk';


//thunk'ı kullanmak icin applyMiddleware methodunu kullanıyoruz.
const rootReducer = combineReducers({
  movieReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;
