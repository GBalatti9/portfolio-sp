
export const Button = ({ onClick, color, text }) => {

    const colorVariants = {
        blue: 'bg-blue-400 hover:bg-blue-700 text-white',
        red: 'bg-red-400 hover:bg-red-700 text-white',
    }


    return (
        <button
            className={`py-2 px-3 rounded-md transition-colors ${ colorVariants[color] }`}
            onClick = { onClick }>
                { text }
        </button>
    )
}
