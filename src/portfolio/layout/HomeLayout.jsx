import { NavBar } from "../../ui/components"
import { Layout } from "./"

export const HomeLayout = ({ children, menuVisible }) => {
    return (
        <>
        <Layout>
            <div className={`${menuVisible ? 'translate-y-20' : ''} transition-transform duration-500 ease-out absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                { children }
            </div>
            <div className={`absolute top-0 left-0 right-0 transition-transform duration-500 ease-out transform ${menuVisible ? 'translate-y-0' : 'translate-y-[-60px]'}`}>
                <NavBar />
            </div>
        </Layout>
        </>
    )
}

