import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { pause } from '../../tools/pause';

export const removeUser = createAsyncThunk('user/remove', async (user) => {
  const response = await axios.delete(`http://localhost:3005/${user.id}`);
  await pause(300);
	
  return response.data;
});
