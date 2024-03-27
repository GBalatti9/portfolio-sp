

export const Inputs = ({ name, type, handleInputChange }) => {
    return (
        <div className="p-2">
            <label htmlFor={ name } className="font-medium">{ name }</label>
            <br />
            <input
                type={ type }
                className="border rounded p-1 text-base"
                placeholder={`${ type === 'text' ? 'John Doe' : '1234...'}`}
                onChange={ handleInputChange }
                name={ name }
            />
        </div>
    )
}
