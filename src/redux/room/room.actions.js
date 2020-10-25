import RoomActionTypes from './room.types';

export const setRoomData = (roomName, roomCode) => ({
	type: RoomActionTypes.SET_ROOM_DATA,
	payload: { roomName, roomCode },
});

export const toggleEmojiPopup = () => ({
	type: RoomActionTypes.TOGGLE_EMOJI_POPUP,
})

export const toggleCodePopup = () => ({
	type: RoomActionTypes.TOGGLE_CODE_POPUP,
})

export const setTheme = (theme) => {
	console.log('INSIDE ROOM ACTION:::', theme);
	return {
		type: RoomActionTypes.SET_THEME,
		payload: theme
	}
}

export const setLanguage = (language) => ({
	type: RoomActionTypes.SET_LANGUAGE,
	payload: language
})