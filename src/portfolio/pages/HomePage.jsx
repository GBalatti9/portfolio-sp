import { useEffect, useState } from "react";
import { NavBar } from "../../ui/components"
import { HomeLayout } from "../layout/HomeLayout"
import '../../index.css';
import Typewriter from 'typewriter-effect';
import { Stickers } from "../components";

export const HomePage = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <>
            <HomeLayout menuVisible={menuVisible}>
                <Stickers />
                {/* <div className="overflow-hidden text-center"> */}
                    {/* <h1 style={{ fontSize: '4rem' }} className="inter-font"> */}
                        {/* Salvador Posse */}
                        {/* <Typewriter
                            options={{
                                strings: ['Salvador Posse', 'Creative', 'Advertiser'],
                                autoStart: true,
                                loop: true,
                            }}
                        /> */}
                        {/* </h1> */}
                {/* </div> */}
                <button onClick={() => setMenuVisible(!menuVisible)} 
                    className="border border-red-500 w-1/12 h-12 rounded-xl bg-red-500 text-white hover:bg-red-800 hover:border-red-800">
                    !
                </button>
            </HomeLayout>
        </>
    )
}
