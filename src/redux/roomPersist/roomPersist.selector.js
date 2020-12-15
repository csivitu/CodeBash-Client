import { createSelector } from 'reselect';

const selectRoomPersist = state => state.roomPersist;

export const selectRoomMessages = roomCode => createSelector(
	[selectRoomPersist],
	roomPersist => roomPersist.messages.filter(message => message.roomCode === roomCode)
);

export const selectRoomUsers = createSelector(
	[selectRoomPersist],
	roomPersist => roomPersist.users,
);