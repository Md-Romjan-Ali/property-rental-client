
import { BookingModal } from "@/component/BookModal";
import ClientSays from "@/component/ClientSaysForm";
import { getSingleOwnerDataById } from "@/lib/owner/ownerget";
import { Button } from "@heroui/react";
import Image from "next/image";
import {
    FaMapMarkerAlt,
    FaBed,
    FaBath,
    FaRulerCombined,
    FaHome,
    FaCheckCircle,
    FaMoneyBillWave,
    FaCalendarAlt,
    FaShieldAlt,
} from "react-icons/fa";


export default async function PropertyDetails({ params }) {
    const { id } = await params;
    const property = await getSingleOwnerDataById(id);
    console.log(property, 'from');
    const amenitiesList = property.amenities || [];

    return (
        <div className="min-h-screen bg-slate-50/50 pb-12">
            {/* 1. HERO IMAGE SECTION */}
            <div className="max-w-7xl mx-auto px-4 pt-6">
                <div className="relative h-[300px] md:h-[480px] w-full rounded-3xl overflow-hidden shadow-lg group">
                    <Image
                        src={property.image}
                        alt={property.propertyName}
                        fill
                        priority
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

                    {/* Floating Property Type Tag */}
                    <div className="absolute top-4 left-4 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 px-4 py-2 rounded-full shadow-sm flex items-center gap-2 border border-white/20">
                        <FaHome size={23} className="text-indigo-600" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                            {property.propertyType}
                        </span>
                    </div>
                </div>
            </div>

            {/* 2. MAIN CONTENT GRID */}
            <div className="max-w-7xl mx-auto px-4 mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* LEFT COLUMN: Main Details (66% Width equivalents) */}
                    <div className="lg:col-span-2 space-y-8">

                        <div className="border-b border-slate-200 pb-6">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                                {property.propertyName}
                            </h1>
                            <div className="flex items-center gap-2 text-slate-500 mt-3 text-base">
                                <div className="p-2 bg-rose-50 rounded-full">
                                    <FaMapMarkerAlt size={23} className="text-rose-500" />
                                </div>
                                <span className="font-medium">{property.location}</span>
                            </div>
                        </div>

                        {/* Core Features Grid */}
                        <div>
                            <h2 className="text-lg font-bold text-slate-900 mb-4">Property Overview</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm transition hover:shadow-md">
                                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                                        <FaHome size={23} />
                                    </div>
                                    <div>
                                        <p className="text-[14px] text-slate-400 font-medium">Type</p>
                                        <p className="text-sm font-semibold text-slate-800">{property.propertyType}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm transition hover:shadow-md">
                                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                                        <FaBed size={23} />
                                    </div>
                                    <div>
                                        <p className="text-[14px] text-slate-400 font-medium">Bedrooms</p>
                                        <p className="text-sm font-semibold text-slate-800">{property.bedrooms} Beds</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm transition hover:shadow-md">
                                    <div className="p-3 bg-violet-50 text-violet-600 rounded-xl">
                                        <FaBath size={23} />
                                    </div>
                                    <div>
                                        <p className="text-[14px] text-slate-400 font-medium">Bathrooms</p>
                                        <p className="text-sm font-semibold text-slate-800">{property.bathrooms} Baths</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm transition hover:shadow-md">
                                    <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                                        <FaRulerCombined size={23} />
                                    </div>
                                    <div>
                                        <p className="text-[14px] text-slate-400 font-medium">Area Size</p>
                                        <p className="text-sm font-semibold text-slate-800">{property.size} sqft</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h2 className="text-xl font-bold text-slate-900 mb-3">About This Property</h2>
                            <p className="text-slate-600 leading-relaxed whitespace-pre-line text-sm md:text-base">
                                {property.description}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h2 className="text-xl font-bold text-slate-900 mb-5">
                                Customer Review
                            </h2>


                        </div>
                        {/* Amenities */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h2 className="text-xl font-bold text-slate-900 mb-4">
                                What This Place Offers
                            </h2>

                            {amenitiesList.length > 0 ? (
                                <div className="flex flex-wrap gap-3">
                                    {amenitiesList.map((item, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium text-sm"
                                        >
                                            <FaCheckCircle className="text-emerald-500" size={14} />
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-slate-400 text-sm italic">
                                    No standard amenities listed.
                                </p>
                            )}
                        </div>


                        {/* customer says */}
                        <ClientSays />
                        {/* Location/Map Placeholder */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h2 className="text-xl font-bold text-slate-900 mb-3">
                                Neighborhood Location
                            </h2>

                            <div className="overflow-hidden rounded-xl">
                                <iframe
                                    title="Property Location"
                                    width="100%"
                                    height="300"
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                                        property.location
                                    )}&output=embed`}
                                    className="border-0 w-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Sticky Pricing & Action Widget (33% Width equivalents) */}
                    <div className="lg:col-span-1 lg:sticky lg:top-6">
                        <div className="bg-white border border-slate-200/80 shadow-xl rounded-3xl p-6 space-y-6">

                            {/* Rental Price Header */}
                            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Monthly Rent</p>
                                    <div className="flex items-baseline gap-1 mt-1">
                                        <span className="text-3xl font-extrabold text-slate-900">৳ {property.monthlyRent}</span>
                                        <span className="text-sm text-slate-500 font-medium">/mo</span>
                                    </div>
                                </div>
                                <div className="p-3 bg-emerald-500 text-white rounded-2xl shadow-md shadow-emerald-500/20">
                                    <FaMoneyBillWave size={22} />
                                </div>
                            </div>

                            {/* Booking Button Action */}
                            <BookingModal ownerId={property?.userId} price={property?.
                                monthlyRent} productId={property?._id} title={property?.propertyName} />
                            <Button variant="secondary" className="w-full py-3">
                                {/* <Ripple /> */}
                                Add To Favourite
                            </Button>

                            {/* Footer note */}
                            <p className="text-[14px] text-center text-slate-400 leading-relaxed px-2">
                                Pressing request connects your profile directly to the landlord to arrange safe check-ins and lock pricing.
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}