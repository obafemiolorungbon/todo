import { Route, Routes } from "react-router-dom";
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
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
}

export default App;
