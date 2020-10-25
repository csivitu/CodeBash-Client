import RoomPersistActionTypes from './roomPersist.types';

const INITIAL_STATE = {
	messages: [],
	users: []
};

const roomPersistReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case RoomPersistActionTypes.ADD_MESSAGE:
			return {
				...state,
				messages: [...state.messages, action.payload]
			};
		case RoomPersistActionTypes.UPDATE_ROOM_USERS:
			return {
				...state,
				users: action.payload
			};
		default:
			return state;
	}
};

export default roomPersistReducer;
