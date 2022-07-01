import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserStateType = {
  isAuthenticated: boolean;
  profile: {
    [x: string]: any
    username: string; role: string
  };
};
const initialState: UserStateType = {
  isAuthenticated: false,
  profile: {
    username: "mike",
    role: "admin",
    "email": "forinda82@gmail.com",
    "userName": "forinda",
    "credit": 40.9,
    "city": "Nairobi",
    "zip": "P.O Box 536 Naukuru",
    "phoneNumber": "+254745364713",
    "_links": {
      "self": {
        "href": "https://user-microservice-app.herokuapp.com/api/v1/users/forinda82%40gmail.com"
      },
      "/api/v1/users": {
        "href": "https://user-microservice-app.herokuapp.com/api/v1/users"
      }
    }
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<UserStateType["profile"]>) => {
      state.isAuthenticated = true
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
