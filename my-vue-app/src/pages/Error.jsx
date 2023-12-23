import React from 'react';
import { useRouteError } from 'react-router';


const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className='flex justify-center  min-h-screen items-center flex-col'>
            <h1 className='text-3xl font-bold text-red-600'>Ooops!</h1>
            <p className='my-2 text-xl'>Sorry, an unexpected error has occured</p>
            <p className='text-4xl font-bold'>{error.statusText|| error.message}</p>
        </div>
    );
}

export default ErrorPage;