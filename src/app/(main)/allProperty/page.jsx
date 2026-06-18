import PropertyCard from '@/component/PropertyCard';
import { getOwnerData } from '@/lib/owner/ownerget';
import React from 'react';

const AllPropertyPage = async () => {
    const properties = await getOwnerData()
    console.log(properties, 'from properieys');
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
                {
                    properties.map(property => <PropertyCard key={property._id} property={property}></PropertyCard>)
                }
            </div>
        </div>
    );
};

export default AllPropertyPage;