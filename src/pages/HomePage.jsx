import React from "react";
import { Link } from "react-router-dom";
import Pricing from "./Pricing";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

export default function HomePage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>WorldWise</h1>

      <Link to='/app'>Go to the App</Link>
    </div>
  );
}
