import React from "react";
import ReactDOM from "react-dom/client";
import { Form } from "./components/card/card"
import { Home } from "./pages/home";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Form />
    <Home />
    <Footer />
  </React.StrictMode>
);
