import RoomPersistActionTypes from './roomPersist.types';

export const addMessage= (message) => ({
	type: RoomPersistActionTypes.ADD_MESSAGE,
	payload: message,
});

export const updateRoomUsers = (users) => ({
	type: RoomPersistActionTypes.UPDATE_ROOM_USERS,
	payload: users
})