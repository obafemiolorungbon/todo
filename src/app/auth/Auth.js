import { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../services/googleAuthRefresh";
import { useNavigate } from "react-router-dom";

const clientId = process.env.REACT_APP_CLIENT_ID;

export const LoginPrompt = () => {
  const navigate = useNavigate();

  const onSuccess = (res) => {
    const {
      profileObj: { name },
    } = res;
    localStorage.setItem("username", name);
    navigate("/profile");
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    alert(`Failed to login. 😢 Please try again later`);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
};

export const Login = () => {
  useEffect(() => {
    // check if they are not auth, push to login
  });
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
      <h1 style={{ marginBottom: "50px" }}>LOGIN IN INTO YOUR ACCOUNT</h1>

      <LoginPrompt />
    </div>
  );
};
