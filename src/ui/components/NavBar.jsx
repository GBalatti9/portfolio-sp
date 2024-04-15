import { Link, useLocation } from "react-router-dom";


let items = ['Work', 'About', 'Contact'];

export const NavBar = () => {
    const { pathname } = useLocation();

    // Esta funcion sirve para reemplazar dinámicamente la información del Navbar. Si el usuario se encuentra en la vista principal, es decir, la ruta '/', se le va a mostrar el NavBar original. Pero si se encuentra en About por ejemplo, 'About' va a ser reemplazado del NavBar por 'Home'.
    const actualPage = pathname.split('/')[1]

    const index = items.findIndex(( item ) => ( actualPage === item.toLowerCase() ));
    if (index !== -1) {
        items.splice(index, 1, 'Home');
    }


    return (
        <ul className="flex justify-around mt-5">
        {
            items.map(( item ) => (
                <Link key={item} className="text-2xl py-2" to={`/${ item.toLowerCase() }`}> { item } </Link>
            ))
        }
        </ul>
    )
}
