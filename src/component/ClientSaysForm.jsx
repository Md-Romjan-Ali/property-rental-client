"use client"
import { clientSays } from '@/lib/owner/ownerpost';
import { userSession } from '@/lib/session';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';

const ClientSays = () => {
    const [loadin, setLoading] = useState(false)
    const clientHandle = async (e) => {
        e.preventDefault()
        setLoading(true)
        const user = await userSession()
        const client = e.target
        const rating = client.rating.value;
        const description = client.description.value;
        const clientSay = {
            rating,
            description,
            name: user?.name,
            email: user?.email,
            image: user?.image
        }
        await clientSays(clientSay)
        setLoading(false)
        client.reset()

    }
    return (
        <div>
            <form
                onSubmit={clientHandle}
                className="space-y-5 flex gap-5 relative">
                {/* Rating */}
                <div className="flex-1">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                        What do you think about this property?
                    </label>

                    <textarea
                        rows={4}
                        name='description'
                        placeholder="Share your experience..."
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="">
                    <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-1">
                            <FaStar size={21} className="text-orange-400" /> Rating
                        </label>

                        <select
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            name='rating'
                        >
                            <option value="" disabled>
                                Select Rating
                            </option>
                            <option value="1"> 1 - Poor</option>
                            <option value="2">2 - Fair</option>
                            <option value="3"> 3 - Good</option>
                            <option value="4"> 4 - Very Good</option>
                            <option value="5"> 5 - Excellent</option>
                        </select>
                    </div>
                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full mt-3 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
                    >
                        {
                            loadin ? 'posting..' : 'Submit Review'
                        }

                    </button>
                </div>

            </form>
        </div>
    );
};

export default ClientSays;