import React from "react";
import { Container } from "@material-ui/core";
import FarmHeader from "../farmheader/FarmHeader";
import Farm from "../farm/Farm";
import Trading from "../trading/Trading";
import Ready from "../ready/Ready";
import Footer from "../footer/Footer";
import Roadmap from "../Roadmap/Roadmap";

export default function Main() {
  return (
    <div className="App">
      <FarmHeader />
      <Farm />
      <Trading />
      <Roadmap />
      <Ready />
      <Footer />
    </div>
  );
}
