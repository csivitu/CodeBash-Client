import { createSelector } from 'reselect';

const selectRoom = state => state.room;

export const selectRoomName = createSelector(
	[selectRoom],
	room => room.roomName,
);

export const selectRoomCode = createSelector(
	[selectRoom],
	room => room.roomCode,
);

export const selectEmojiPopup = createSelector(
	[selectRoom],
	room => room.emojiPopup
);

export const selectCePopup = createSelector(
	[selectRoom],
	room => room.cePopup
);

export const selectTheme = createSelector(
	[selectRoom],
	room => room.theme
);

export const selectLanguage = createSelector(
	[selectRoom],
	room => room.language
);
