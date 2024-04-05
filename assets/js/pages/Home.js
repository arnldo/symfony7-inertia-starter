import React from 'react';
import { Head } from '@inertiajs/react';

export default function HomePage({ name }) {
    return (
        <>
            <Head title='Home'/>

            <div className='text-center'>
                <h1 className='text-gray-300 font-bold mb-4'>Hello, {name}!</h1>
            </div>
        </>
    );
}