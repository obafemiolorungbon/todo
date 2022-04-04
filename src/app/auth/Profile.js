import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_CLIENT_ID;

const LogoutPrompt = () => {
  const navigate = useNavigate();
  const onSuccess = () => {
    navigate("/login");
    localStorage.removeItem("username");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
};

export const ProfilePage = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState("");
  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate("/login");
      return;
      // check if they are not auth, push to login
    }
    setLoggedInUser(localStorage.getItem("username"));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1 style={{ marginBottom: "50px" }}>
        Welcome {loggedInUser}, How are you today?
      </h1>
      <LogoutPrompt />
    </div>
  );
};
