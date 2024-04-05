import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import Routing from 'fos-router';

const Layout = ({ children }) => {
    const { component, props } = usePage();

    return (
        <>
            <header>
                <div className='flex bg-gray-800 text-white top-0 py-3 flex-wrap justify-around'>
                    <h1 className='text-lg font-semibold'>Symfony</h1>

                    <ul className='flex gap-[40px]'>
                        <li>
                            <Link
                                href={Routing.generate('app_home')}
                                className={component === 'Home' ? 'text-blue-500 font-bold' : ''}
                                aria-current={component === 'Home'}
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href={Routing.generate('app_about')}
                                className={component === 'About' ? 'text-blue-500 font-bold' : ''}
                                aria-current={component === 'About'}
                            >
                                About Us
                            </Link>
                        </li>

                        <li>
                            <Link
                                href={Routing.generate('app_contact')}
                                className={component === 'Contact' ? 'text-blue-500 font-bold' : ''}
                                aria-current={component === 'Contact'}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>

            <div className="min-h-screen flex items-center justify-center w-full bg-gray-950">
                <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
                    <h1 className="text-2xl font-bold text-center mb-4 text-gray-200">{component}</h1>

                    <main role="main">
                        {props?.flash?.success && (
                            <div className="alert alert-success" role="alert">
                                {props.flash.success}
                            </div>
                        )}

                        {children}
                    </main>

                </div>

            </div>

            <footer className="footer footer-center  w-full p-4 bg-gray-800 text-white">
                <div className="text-center">
                    <p>
                        Built with &hearts; by{' '}
                        <a className="text-gray-300" href="https://github.com/">arnldo</a>.
                    </p>
                </div>
            </footer>
        </>
    );
};

export default (page) => <Layout>{page}</Layout>;