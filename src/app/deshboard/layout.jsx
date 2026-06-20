import { Sidebar } from '@/component/Sidebar';
import React from 'react';

const DeshboardLayout = ({ children }) => {
    return (

        <div className='w-full'>
            <div className='flex'>
                <div className='absolute md:static mt-2'>
                    <Sidebar />
                </div>
                <div className='flex-1 mt-10 md:m-10 mx-auto'>
                    {children}
                </div>
            </div>
        </div>



    );
};

export default DeshboardLayout;