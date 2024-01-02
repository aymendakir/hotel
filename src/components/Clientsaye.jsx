
import ScrollCarousel from 'scroll-carousel-react';
import {LiaBathSolid, LiaBedSolid} from "react-icons/lia";
import {Button} from "@material-tailwind/react";
import React from "react";


const applicants = [ {
    title: 'waw is incroyable hotrl the best in maroc',
    img: require('./img/product-02.jpg'),
    id:0,
},
    {
        title: 'waw is incroyable hotrl the best in maroc',
        img: require('./img/profilephoto.jpg'),
        id:1,
    },
    {
        title: 'waw is incroyable hotrl the best in maroc',
        img: require('./img/profilephoto.jpg'),
        id:2,
    },
    {
        title: 'waw is incroyable hotrl the best in maroc',
        img: require('./img/profilephoto.jpg'),
        id:3,
    },

]
export default function Clientsaye(){
    return(
        <div className="mt-20 min-h-[80vh] bg-blue-100 font_home rounded-2xl ">
            <div className="mt-10">
                <h1 className=" mb-16 pt-10 uppercase text-2xl font-bold text-center"> what our client say</h1>

                <ScrollCarousel

               autoplay
               speed={0}
                    onReady={() => console.log('I am ready')}
                    margin={350}
                >
                    {applicants.map((applicant) => (
                        <div key={applicant.id}
                             className="   p-10 w-[420px] h-[320px] rounded-2xl bg-white ">

                            <img className=" mx-auto w-[100px] h-[100px] rounded-full shadow-gray-500 shadow-sm" src={applicant.img}/>

                            <div className="p-2  mt-9 max-w-[70%] mx-auto ">

                               <p className="text-black text-center  break-all text-lg ">{applicant.title}</p>

                            </div>
                        </div>
                    ))}
                </ScrollCarousel>
            </div>

        </div>

    )
}