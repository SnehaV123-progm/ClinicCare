import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  name: '',
  email: '',
  phone: '',
  gender: '',
  dob: '',
  patientId: '',
  profilePic: '',
  address: {}
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const {
        name,
        email,
        phone,
        gender,
        dob,
        patientId,
        profilePic,
        address
      } = action.payload;

      state.isLoggedIn = true;
      state.name = name;
      state.email = email;
      state.phone = phone;
      state.gender = gender;
      state.dob = dob;
      state.patientId = patientId;
      state.profilePic = profilePic || '';
      state.address = address || {};
    },
    logout: (state) => {
      return initialState;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
