import React from "react"

export const LoadingMessage: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <>
            {isLoading &&
                <div className="alert alert-danger" role="alert">
                    Cargando...
                </div>
            }
        </>
    )
}
