import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { WelcomePage } from "./app/auth";
import { Dashboard } from "./app/dashboard";
// import { Header } from "./components/Header";
// import { Login } from "./components/Login";
// import { MainPage } from "./components/MainPage";
// import { ProfilePage } from "./components/Profile";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
