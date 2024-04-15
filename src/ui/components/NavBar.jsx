import { Link } from "react-router-dom";

const items = ['Work', 'About', 'Contact'];

export const NavBar = () => {
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
