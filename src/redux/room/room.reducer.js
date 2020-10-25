import RoomActionTypes from './room.types';

const INITIAL_STATE = {
	roomName: null,
	roomCode: null,
	cePopup: 0,
	emojiPopup: 0,
	theme: 'Monokai',
	language: 'Javascript'
};

const roomReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case RoomActionTypes.SET_ROOM_DATA:
			return {
				...state,
				...action.payload
			};
		case RoomActionTypes.TOGGLE_EMOJI_POPUP:
			return {
				...state,
				emojiPopup: state.emojiPopup === 0 ? 1 : 0
			};
		case RoomActionTypes.TOGGLE_CODE_POPUP:
			return {
				...state,
				cePopup: state.cePopup === 0 ? 1 : 0
			};
		case RoomActionTypes.SET_THEME:
			return {
				...state,
				theme: action.payload
			};
		case RoomActionTypes.SET_LANGUAGE:
			return {
				...state,
				language: action.payload
			};
		default:
			return state;
	}
};

export default roomReducer;
