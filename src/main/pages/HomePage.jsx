import { useEffect, useState } from "react";
import { NavBar } from "../../ui/components"
import { HomeLayout } from "../layout/HomeLayout"
import '../../index.css';

export const HomePage = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <HomeLayout menuVisible={menuVisible}>
            <div className="min-h-screen flex justify-center items-center">
                <button onClick={() => setMenuVisible(!menuVisible)}>Toggle Menu</button>
            </div>
        </HomeLayout>
    )
}
