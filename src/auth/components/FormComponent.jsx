

export const FormComponent = () => {

    const inputs = [
        { id: 1, name: 'Nombre',     type: 'text' },
        { id: 2, name: 'Contraseña', type: 'password' },
    ]

    return (
        <>
            <form>
                {
                    inputs.map(( input ) => (
                        <div key={ input.id }>
                            <label htmlFor={ input.name }>{ input.name }</label>
                            <br />
                            <input type={ input.type } style={{ width: '100%' }}/>
                        </div>
                    ))
                }
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button>Login</button>
                </div>
            </form>
        </>
    )
}
