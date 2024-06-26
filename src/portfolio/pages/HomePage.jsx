import { useEffect, useState } from "react";
import { NavBar } from "../../ui/components"
import { HomeLayout } from "../layout/HomeLayout"
import '../../index.css';
import Typewriter from 'typewriter-effect';
import { Stickers } from "../components";

export const HomePage = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [showHorse, setShowHorse]    = useState(false);

    return (
        <>
            <HomeLayout menuVisible={menuVisible}>
                {/* <div className="overflow-hidden text-center"> */}
                    <h1 style={{ fontSize: '4rem' }} className="inter-font">
                        Salvador Posse
                        {/* <Typewriter
                            options={{
                                strings: ['Salvador Posse', 'Creative', 'Advertiser'],
                                autoStart: true,
                                loop: true,
                            }}
                        /> */}
                        </h1>
                {/* </div> */}
                <button onClick={() => setMenuVisible(!menuVisible)} > Don't click me </button>
            </HomeLayout>
            <div className='absolute bottom-10 right-10'>
                <button 
                onClick={() => setShowHorse(!showHorse)}
                className='bg-red-500 w-10 h-10 rounded-full text-white hover:bg-red-800 transition-all' >!</button>
            </div>
            { showHorse && <Stickers /> }
        </>
    )
}
