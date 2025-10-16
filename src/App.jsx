import { useState } from "react";
import NavbarMenu from "./frontend/components/NavbarMenu";
import { Route, Routes } from "react-router-dom";
import Layout from "./frontend/components/Layout";
import Home from "./frontend/pages/Home";
import Contact from "./frontend/pages/ContactPage";
import Footer from "./frontend/components/Footer";
import ContactPage from "./frontend/pages/ContactPage";
import StudentDetails from "./frontend/pages/StudentDetails";
import LiveRecorder from "./frontend/pages/LiveRecorder";
import BackendLayout from "./backend/components/BackendLayout";

function App() {
  return (
    <>
      <NavbarMenu />
      <Routes path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="live" element={<LiveRecorder />} />
        <Route path="student-details/:username" element={<StudentDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
