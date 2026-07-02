import React from 'react';

const PropertyCardSkeleton = () => {
    // Generates 6 clean property cards
    const skeletonCards = Array.from({ length: 6 });

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 animate-pulse">
            {/* Page Header / Title Placeholder */}
            <div className="h-8 w-48 bg-gray-300 rounded-lg mb-8" />

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skeletonCards.map((_, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden flex flex-col h-full min-h-[410px]"
                    >
                        <div className="relative aspect-[16/10] w-full bg-gray-300 flex-shrink-0" />

                        <div className="p-5 flex flex-col flex-grow justify-between bg-white">

                            <div className="space-y-3.5">

                                <div className="space-y-2">
                                    <div className="h-5 w-11/12 bg-gray-300 rounded-md" />
                                    <div className="h-5 w-2/3 bg-gray-300 rounded-md" />
                                </div>

                                <div className="flex gap-2 pt-1">
                                    <div className="h-5 w-14 bg-gray-200 rounded" />
                                    <div className="h-5 w-14 bg-gray-200 rounded" />
                                    <div className="h-5 w-16 bg-gray-200 rounded" />
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                                <div className="space-y-1.5">
                                    <div className="h-3 w-12 bg-gray-200 rounded" />
                                    <div className="h-6 w-24 bg-gray-300 rounded-md" />
                                </div>

                                {/* Action / Status Button */}
                                <div className="h-10 w-28 bg-gray-300 rounded-xl" />
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertyCardSkeleton;