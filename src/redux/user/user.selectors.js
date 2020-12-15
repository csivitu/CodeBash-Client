import { createSelector } from 'reselect';

const selectUserState = state => state.user;

export const selectUser = createSelector(
	[selectUserState],
	userState => userState.currentUser
)

export const selectUserName = createSelector(
	[selectUserState],
	userState => userState.currentUser.userName,
);