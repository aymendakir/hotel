

import Navbar from "./Navbar";
import React from "react";
import Inputs from "./input_recherch/inputs";
import Header from "./Header";
import Homechambre from "./Homechambre";
import App from "../App";
import Clientsaye from "./Clientsaye";

export default function Home(){
    return(
        <>
            <Navbar/>
            <Header />
            <Inputs />
            <Homechambre />
            <Clientsaye />
        </>

    )
}