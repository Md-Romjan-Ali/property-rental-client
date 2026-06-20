
import React from 'react';
import ClientSasyCard from './ClientSaysCard';
import { reviewFromCliet } from '@/lib/owner/ownerget';
import Marquee from 'react-fast-marquee';

const Review = async () => {
    const reviews = await reviewFromCliet()
    console.log(reviews, 'from review');
    return (
        <div className='my-10'>
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Trusted by Our Happy Clients
                </h2>

                <p className="text-slate-600 text-lg leading-relaxed">
                    Discover why our clients choose us. Real stories, honest feedback, and
                    experiences that reflect our commitment to delivering exceptional service
                    and creating lasting satisfaction.
                </p>
            </div>
            <Marquee pauseOnHover={true}>

                <div className='flex items-center gap-5'>

                    {
                        reviews?.map(review => <ClientSasyCard key={review._id} review={review}></ClientSasyCard>)
                    }
                </div>
            </Marquee>
        </div>

    );
};

export default Review;