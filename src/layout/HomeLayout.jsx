import React from "react";
import { Outlet } from "react-router-dom";
import FooterHome from "../components/FooterHome/FooterHome";
import Navbar from "../components/navbar/Navbar";
import Login from "../pages/login/Login";

export default function HomeLayout() {
  const user = window.localStorage.getItem("username");
  if (user) {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "256px 1fr",
          gap: "20px",
        }}
      >
        <div>
          <Navbar />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flex: 1, marginTop: 20 }}>
            <Outlet />
          </div>
          <FooterHome />
        </div>
      </div>
    );
  } else {
    return <Login />;
  }
}
