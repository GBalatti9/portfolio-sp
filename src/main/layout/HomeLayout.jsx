import { NavBar } from "../../ui/components"

export const HomeLayout = ({ children, menuVisible }) => {
    return (
        <>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            <div className={`${menuVisible ? 'translate-y-20' : ''} transition-transform duration-500 ease-out absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                { children }
            </div>
        </div>
        <div className={`absolute top-0 left-0 right-0 transition-transform duration-500 ease-out transform ${menuVisible ? 'translate-y-5' : 'translate-y-[-40px]'}`}>
                <NavBar />
            </div>
        </>
    )
}

