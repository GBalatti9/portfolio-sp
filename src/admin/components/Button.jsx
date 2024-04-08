import './ButtonStyle.css';

export const Button = ({ onClick, color, text }) => {
    return (
        <button
            className={`py-2 px-3 rounded-md text-white ${ color } button-hover`}
            onClick = { onClick }>
                { text }
        </button>
    )
}
