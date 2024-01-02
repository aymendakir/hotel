import {LiaBathSolid, LiaBedSolid} from "react-icons/lia";
import {Button,IconButton} from "@material-tailwind/react";
import React, {useState} from "react";

const applicants = [ {
    title: '4 chambre zwina', stars: '5',
    beds: '4', baths: '4',
    prix: '600', img: require('../components/img/chambre3.jpg'),
    id:0,
    favact:'',
},
    {
        title: '2 chambre zwina', stars: '4',
        beds: '2', baths: '2',
        prix: '150', img: require('../components/img/chambre2.jpg'),
        id:1,
    },
    {
        title: 'bit mouad zaml', stars: '4',
        beds: '2', baths: '2',
        prix: '150', img: require('../components/img/chambre2.jpg'),
        id:1,
    },
    {
        title: 'bit lma', stars: '4',
        beds: '2', baths: '2',
        prix: '150', img: require('../components/img/chambre2.jpg'),
        id:1,
    },
    {
        title: 'lbit dial mzalit', stars: '3.5',
        beds: '1', baths: '1',
        prix: '70', img: require('../components/img/chambre1.jpg'),
        id:2,
    },
    {
        title: 'bit dial 9hab', stars: '5',
        beds: '1', baths: '1',
        prix: '50', img: require('../components/img/chambre3.jpg'),
        id:3,
    },

];
function Homechambre() {



    return (
        <div className="flex flex-col mt-16 font_home ">
            <h1 className="text-center mb-9 capitalize font-black text-2xl">popular chambre</h1>
            <div>

                <div   className="w-[80%] md:grid-cols-1  md:space-x-0  grid grid-cols-3   lg:grid-rows-2 space-x-12 mt-7   mx-auto ">
                    {applicants.map(function(applicant)  {
                        return (
                            <div key={applicant.id} className=" md:ml-auto  ml-12 border-0  shadow-sm shadow-gray-500 rounded-xl mt-7 ">

                                <img className="w-full rounded-t-md" src={applicant.img}/>

                                <div className="p-2 border border-gray-100 rounded-md ">

                                    <div className="flex justify-between mt-3 font-medium text-lg">
                                        <h3 /******title*********/>{applicant.title} </h3>
                                        <span /******stars*********/
                                            className="flex justify-between items-center ">
<img className="w-5 mr-1" src={require("../components/img/star.png")}/>
                                            {applicant.stars}

                                </span>
                                    </div>
                                    <div className=" flex mt-7 space-x-2 items-center relative">
                        <span /******chamber beds*********/
                            className="py-2 px-3 bg-transparent border border-gray-400 rounded-full capitalize flex justify-between items-center   "><LiaBedSolid
                            className="mr-2 text-xl"/>
                            {applicant.beds} beds</span>
                                        <span  /******baths*********/

                                            className="py-2 px-3 bg-transparent border border-gray-400 rounded-full capitalize flex justify-between items-center   "><LiaBathSolid
                                            className="mr-2 text-xl"/>{applicant.baths} baths</span>



                                    </div>
                                    <div
                                        className="mt-9 flex justify-between relative mx-2 after:top-0 after:h-0.5   after:rounded-full after:bg-opacity-25 after:w-full  after:absolute after:bg-gray-500 after:-mt-[15px]">
                                        <span  /******prix chamber*********/ className="font-bold text-xl">${applicant.prix}</span>
                                        <span /******per night*********/ className="font-medium opacity-80 capitalize text-xl">per night</span>
                                    </div>
                                    <div>
                                        <Button className="bg-black w-[90%] my-5 ml-4 ">Reserves</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );


}
export default Homechambre;
