import React from 'react'

export const LogoutButton = ({ handleLogout }) => {
    return (
        <button
            className="bg-blue-400 py-2 px-3 rounded-md text-white" 
            onClick = { handleLogout }>
                Logout
                </button>
    )
}
