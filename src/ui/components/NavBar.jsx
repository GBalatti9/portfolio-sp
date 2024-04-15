
const items = ['Work', 'About', 'Contact'];

export const NavBar = () => {
    return (
        <ul className="flex justify-around">
        {
            items.map(( item ) => (
                <li key={item} className="text-2xl py-2"> { item } </li>
            ))
        }
        </ul>
    )
}
