import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <div>
                <h1>Ops! An Error Ocurred!</h1>
                <br />
                {
                    error && (
                        <div>
                            <p className='text-red-500'>
                                {error.statusText || error.message}
                            </p>
                            <p>{error.status}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ErrorPage;