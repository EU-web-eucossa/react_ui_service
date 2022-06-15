import React from "react";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { loginUser, logoutUser } from "state/slices/userSlice";

const btnStyles = {
  border: "none",
  padding: "10px 20px",
  borderRadius: 10,
  fontSize: "1.2rem",
  marginTop: "10px",
  color: "#ffffff",
  cursor: "pointer",
};
const UserState = () => {
  const dispatch = useAppDispatch();
  const {
    profile: { isAuthenticated, role, username },
  } = useAppSelector((state) => state.root.user);
  const login = () => {
    setTimeout(() => {
      dispatch(
        loginUser({
          isAuthenticated: true,
          role: "User",
          username: "Jane Doe",
        })
      );
    }, 3000);
  };
  const logout = () => {
    setTimeout(() => {
      dispatch(logoutUser());
    }, 3000);
  };
  return (
    <div>
      <h1>Sample persistent user State</h1>
      {isAuthenticated
        ? `Current user is ${isAuthenticated} and the name is ${username} Role is ${role}`
        : "You are currently logged out and browsing in Anonymous mode"}
      <div>
        {isAuthenticated ? (
          <button
            onClick={logout}
            style={{ ...btnStyles, backgroundColor: "red" }}
          >
            Logout
          </button>
        ) : (
          <button
            onClick={login}
            style={{ ...btnStyles, backgroundColor: "green" }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default UserState;
