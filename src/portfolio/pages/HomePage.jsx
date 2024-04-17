import { useEffect, useState } from "react";
import { NavBar } from "../../ui/components"
import { HomeLayout } from "../layout/HomeLayout"
import '../../index.css';
import Typewriter from 'typewriter-effect';


export const HomePage = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <>
            <HomeLayout menuVisible={menuVisible}>
                {/* <div className="overflow-hidden text-center"> */}
                    <h1 style={{ fontSize: '5rem' }}>
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
                <button onClick={() => setMenuVisible(!menuVisible)}>Don't click me</button>
            </HomeLayout>
        </>
    )
}
