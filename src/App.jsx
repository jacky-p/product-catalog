import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/SideBar";

export default function App() {
  return (
    <>
      <Header />

      <Outlet />

      {/* Content in SideBar via Outlet*/}

      {/* <div style={{ padding: "16px 0", textAlign: "center" }}>
        © 2025 My Company
      </div> */}
    </>
  );
}
