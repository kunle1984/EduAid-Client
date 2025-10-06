import { useState } from "react";
import NavbarMenu from "./frontend/components/NavbarMenu";
import { Route, Routes } from "react-router-dom";
import Layout from "./frontend/components/Layout";
import Home from "./frontend/pages/Home";
import Contact from "./frontend/pages/Contact";
import Footer from "./frontend/components/Footer";

function App() {
  return (
    <>
      <NavbarMenu />
      <Routes path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
