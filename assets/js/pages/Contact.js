import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import Routing from 'fos-router';

export default function ContactPage() {
    const form = useForm({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        form.setData(e.target.id, e.target.value);
    };

    function submit(e) {
        e.preventDefault();
        form.post(Routing.generate('app_contact'), {
            forceFormData: true,
        });
    }

    return (
        <>
            <Head title='Contact Us'/>

            <form onSubmit={submit}>
                {form.errors.__non_field__ && (
                    <div className="form-error">{form.errors.__non_field__}</div>
                )}

                <div className="mb-4">
                    <label htmlFor="name"
                           className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                    <input type="text" id="name"
                           className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                           placeholder="John Doe" required autoFocus value={form.data.name} onChange={handleInputChange}
                    />
                    {form.errors.name && (
                        <div className='form-error'>{form.errors.name}</div>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email
                        Address</label>
                    <input type="email" id="email"
                           className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                           placeholder="your@email.com" required value={form.data.email} onChange={handleInputChange}
                    />
                    {form.errors.email && (
                        <div className='form-error'>{form.errors.email}</div>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="message"
                           className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <textarea id="message"
                           className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                           placeholder="Lorem ipsum..." rows={4} minLength={10} required value={form.data.message} onChange={handleInputChange}
                    />
                    {form.errors.message && (
                        <div className='form-error'>{form.errors.message}</div>
                    )}
                </div>


                <button type='submit' disabled={form.processing}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                    Send
                </button>
            </form>
        </>
    );
}