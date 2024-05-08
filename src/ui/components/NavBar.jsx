import { NavigationMenu, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


let items = ['Ads', 'Projects', 'About', 'Contact'];

export const NavBar = () => {
    const { pathname } = useLocation();

    // Esta funcion sirve para reemplazar dinámicamente la información del Navbar. Si el usuario se encuentra en la vista principal, es decir, la ruta '/', se le va a mostrar el NavBar original. Pero si se encuentra en About por ejemplo, 'About' va a ser reemplazado del NavBar por 'Home'.
    const actualPage = pathname.split('/')[1]
    let newItems = [...items];

    const index = newItems.findIndex((item) => (actualPage === item.toLowerCase()));
    if (index !== -1) {
        newItems.splice(index, 1, 'Home');
    }

    return (
        <NavigationMenu className="border flex justify-around mt-5 md:w-4/12 mx-auto shadow-lg z-10">
            <NavigationMenuList className="overflow-hidden" id="navbar">
                {
                    newItems.map((item) => (
                        <Link style={{ fontFamily: 'Roboto, sans-serif' }} to={`/${item.toLowerCase()}`}>
                            <NavigationMenuLink key={item} className={`${navigationMenuTriggerStyle()} hover:bg-slate-500/50 hover:text-white rounded-none`} >
                                {item}
                            </NavigationMenuLink>
                        </Link>
                    ))
                }
            </NavigationMenuList>
        </NavigationMenu>
    )
}


