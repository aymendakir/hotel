

import Navbar from "./Navbar";
import React from "react";
import Inputs from "./input_recherch/inputs";
import Header from "./Header";
import Homechambre from "./Homechambre";
import Clientsaye from "./Clientsaye";
import Emailform from "./Emailform";
import Service from "./Facilites_service";
import Index from "../App";
import Fotter from "./fotter";


export default function Home(){
    return(
        <>
            <Navbar/>
            <Header />
            <Inputs />
            <Homechambre />
            <Service />
            <Clientsaye />
            <Emailform />
<Fotter />


        </>

    )
}