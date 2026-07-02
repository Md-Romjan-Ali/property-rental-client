import React from 'react';

const PropertyTableSkeleton = () => {
    const skeletonRows = Array.from({ length: 5 });

    return (
        <div className="container w-full animate-pulse">
            <div className="h-9 w-64 bg-gray-200 rounded-md mb-6"></div>

            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-100">
                <table className="min-w-full bg-white divide-y divide-gray-200">
                    {/* Header Skeleton */}
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4"><div className="h-5 w-12 bg-gray-200 rounded"></div></th>
                            <th className="px-6 py-4"><div className="h-5 w-32 bg-gray-200 rounded"></div></th>
                            <th className="px-6 py-4"><div className="h-5 w-24 bg-gray-200 rounded"></div></th>
                            <th className="px-6 py-4"><div className="h-5 w-16 bg-gray-200 rounded"></div></th>
                            <th className="px-6 py-4 flex justify-center"><div className="h-5 w-20 bg-gray-200 rounded"></div></th>
                        </tr>
                    </thead>

                    {/* Body Skeleton */}
                    <tbody className="divide-y divide-gray-200">
                        {skeletonRows.map((_, index) => (
                            <tr key={index}>
                                {/* Image Column */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="h-14 w-20 bg-gray-200 rounded-md"></div>
                                </td>
                                {/* Property Name Column */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="h-6 w-48 bg-gray-200 rounded"></div>
                                </td>
                                {/* Monthly Rent Column */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="h-5 w-16 bg-gray-200 rounded"></div>
                                </td>
                                {/* Status Column */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
                                </td>
                                {/* Action Button Column */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex justify-center">
                                        <div className="h-9 w-24 bg-gray-200 rounded-md"></div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PropertyTableSkeleton;