
const colorVariants = {
    blue: 'bg-blue-400 hover:bg-blue-700 text-white py-2 px-3 rounded-md',
    red: 'bg-red-400 hover:bg-red-700 text-white py-2 px-3 rounded-md',
    darkBlue: 'bg-slate-900 hover:bg-slate-700 text-white mt-3 mb-2 py-1 px-2 rounded-md'
}
export const Button = ({ onClick, color, text, setDisabled}) => {

    return (
        <button
            className = {`transition-colors ${ colorVariants[color] }`}
            onClick   = { onClick }
            disabled  = { setDisabled === 'disabled' }>
                { text }
        </button>
    )
}
