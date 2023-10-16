import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
	name: 'users',
	initialState: {
		data: []
	},
	reducers: {
		getUsers(state, action) {
			state = [];
		}
	}
})

export const usersReducer = usersSlice.reducer;
export const { getUsers } = usersSlice.actions