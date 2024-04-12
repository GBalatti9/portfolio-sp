
export const ButtonsLayout = ({ children }) => {
    return (
        <div className="w-screen p-4">
            <div className="sm:w-6/12 flex justify-around border-red-400 m-auto">
                { children }
            </div>
        </div>
    )
}
