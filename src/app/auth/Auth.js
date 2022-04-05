import { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../../services/googleRefreshTokens";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "./redux/reducer";
import { toast } from "react-toastify";

const clientId = process.env.REACT_APP_CLIENT_ID;

export const LoginPrompt = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    const { profileObj } = res;

    localStorage.setItem("email", profileObj.email);
    localStorage.setItem("name", profileObj.email);

    dispatch(register({ data: profileObj }));
    navigate("/dashboard");
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    toast.error(`Failed to login. 😢 Please try again later`);
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
      <h1 style={{ marginBottom: "50px" }}>Welcome To Bookr Todo</h1>

      <LoginPrompt />
    </div>
  );
};
