import {LiaBathSolid, LiaBedSolid} from "react-icons/lia";
import {Button} from "@material-tailwind/react";
import React from "react";

const applicants = [ {
    title: '4 chambre zwina', stars: '5',
    beds: '4', baths: '4',
    prix: '600', img: require('./components/img/chambre3.jpg'),
    id:0,
},
    {
        title: '2 chambre zwina', stars: '4',
        beds: '2', baths: '2',
        prix: '150', img: require('./components/img/chambre2.jpg'),
        id:1,
    },
    {
        title: 'lbit dial mzalit', stars: '3.5',
        beds: '1', baths: '1',
        prix: '70', img: require('./components/img/chambre1.jpg'),
        id:2,
    },
    {
        title: 'bit dial 9hab', stars: '5',
        beds: '1', baths: '1',
        prix: '50', img: require('./components/img/chambre2.jpg'),
        id:3,
    },

];
console.log(applicants.img)
function App() {
    return (


                    <div   className="w-[80%] grid grid-cols-3 grid-rows-2 space-x-12 mt-7   mx-auto ">
                        {applicants.map(function(applicant)  {
                            return (
                    <div key={applicant.id} className="  ml-12  shadow-sm shadow-gray-500 rounded-b-xl mt-7 ">

                        <img className="w-full rounded-t-md" src={applicant.img}/>

                        <div className="p-2 border border-gray-100 ">

                            <div className="flex justify-between mt-3 font-medium text-lg">
                                <h3 /******title*********/>{applicant.title} </h3>
                                <span /******stars*********/
                                    className="flex justify-between items-center ">
<img className="w-5 mr-1" src={require("./components/img/star.png")}/>
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
                                <span /******icon fav*********/ className="absolute right-0 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                                d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
                        </span>
                            </div>
                            <div
                                className="mt-9 flex justify-between relative mx-2 after:top-0 after:h-0.5   after:rounded-full after:bg-opacity-25 after:w-full  after:absolute after:bg-gray-500 after:-mt-[15px]">
                                <span  /******prix chamber*********/ className="font-bold text-xl">${applicant.prix}</span>
                                <span /******per night*********/ className="font-medium opacity-80 capitalize text-xl">per night</span>
                            </div>
                            <div>
                                <Button className="bg-black w-[90%] my-5 ml-4 ">Button</Button>
                            </div>
                        </div>
                    </div>
                )
            })}
                    </div>
    );
};


export default App;
