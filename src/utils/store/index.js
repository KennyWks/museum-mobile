//redux toolkit
import rootReducer from '../../redux/reducer/globalReducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk));
