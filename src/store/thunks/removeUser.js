import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { pause } from '../../tools/pause';

export const removeUser = createAsyncThunk('user/remove', async (user) => {
  await axios.delete(`http://localhost:3005/users/${user.id}`);
  await pause(300);
	
  return user;
});
