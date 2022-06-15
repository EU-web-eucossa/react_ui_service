import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserStateType = {
  profile: { isAuthenticated: boolean; username: string; role: string };
};
const initialState: UserStateType = {
  profile: {
    isAuthenticated: false,
    username: "",
    role: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<UserStateType["profile"]>) => {
      state.profile = {
        ...action.payload,
      };
    },
    logoutUser: (state) => {
      state["profile"] = {
        role: "",
        isAuthenticated: false,
        username: "",
      };
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
