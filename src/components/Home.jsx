import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
import Inputs from "./input_recherch/inputs";
import Header from "./Header";
import Homechambre from "./Homechambre";
import Clientsaye from "./Clientsaye";
import Emailform from "./Emailform";
import Service from "./Facilites_service";
import Index from "../App";
import Fotter from "./fotter";
import Navinpu from "./input_recherch/iput_nav";

export default function Home() {
  return (
    <>
      <Navbar />

      <Navinpu />

      <Header />
      <Inputs />
      <Homechambre />

      <Clientsaye />
      <Emailform />
      <Fotter />
    </>
  );
}
