import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import FooterHome from "../components/FooterHome/FooterHome";
import Navbar from "../components/Navbar/Navbar";
export default function HomeLayout() {
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
          // height: "100vh",
        }}
      >
        <div style={{ flex: 1 }}>
          <Outlet />
        </div>
        <FooterHome />
      </div>
    </div>
  );
}
