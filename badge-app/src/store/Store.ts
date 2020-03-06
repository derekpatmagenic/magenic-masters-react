import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as Badges from '../store/Badges';

const reducers = {
    badges: Badges.reducer
};

const rootReducer = combineReducers({
    ...reducers
});

export type ReduxState = ReturnType<typeof rootReducer>;

export default function ConfigureStore() {
    const middleware = [thunk];

    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(...middleware))
    );
}