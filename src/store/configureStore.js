import { createStore, combineReducers,applyMiddleware } from 'redux';
import FeedsReducer from '../store/reducers/FeedsReducer';
import CommentsReducer from '../store/reducers/CommentsReducer';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    FeedsReducer: FeedsReducer,
    CommentsReducer: CommentsReducer,
});

const configureStore = () => {
    
    return createStore(rootReducer,applyMiddleware(thunk));
};

export default configureStore;