import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import roomReducer from './room/room.reducer';
import roomPersistReducer from './roomPersist/roomPersist.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['roomPersist','user','room'],
};

const rootReducer = combineReducers({
    user: userReducer,
    roomPersist: roomPersistReducer,
    room: roomReducer
});

export default persistReducer(persistConfig, rootReducer);
