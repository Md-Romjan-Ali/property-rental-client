import PropertyCard from '@/component/PropertyCard';
import SearchSection from '@/component/SearchSection';
import { getOwnerData } from '@/lib/owner/ownerget';
import React from 'react';

const AllPropertyPage = async () => {
    const properties = await getOwnerData()
    console.log(properties, 'from properieys');
    return (
        <div className='pt-10 max-w-7xl mx-auto'>

            <div className="text-center max-w-3xl mx-auto mb-12">

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Find Your Perfect Place to Call Home
                </h2>

                <p className="text-slate-600 text-lg leading-relaxed">
                    Browse our collection of verified rental properties. From cozy apartments
                    to spacious family homes, discover the perfect place that matches your
                    lifestyle and budget.
                </p>
            </div>
            <div className='mb-5 text-white'>
                <SearchSection />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {properties.map((property) => (
                    <PropertyCard key={property._id} property={property} />
                ))}
            </div>
        </div>
    );
};

export default AllPropertyPage;