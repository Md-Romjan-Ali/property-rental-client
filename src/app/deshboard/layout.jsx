import { Sidebar } from '@/component/Sidebar';
import React from 'react';

const DeshboardLayout = ({ children }) => {
    return (

        <div className='max-w-7xl mx-auto w-full'>
            <div className='flex'>
                <div>
                    <Sidebar />
                </div>
                <div className='flex-1'>
                    {children}
                </div>
            </div>
        </div>



    );
};

export default DeshboardLayout;