import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-transparent hover:border-blue-500 hover:shadow-xl transition-all duration-300">

      {/* Image */}
      <div className="relative">
        <Image
          src={property?.image}
          alt={property?.propertyName}
          width={400}
          height={400}
          className="h-60 w-full object-cover"
        />
        <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          {property?.propertyType}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 line-clamp-1">
          {property?.propertyName}
        </h2>

        {/* Location */}
        <div className="flex items-center text-gray-500 text-sm gap-2">
          <FaMapMarkerAlt className="text-red-500" />
          <span>{property?.location}</span>
        </div>

        {/* Rent */}
        <div className="flex items-center justify-between">
          <div className="text-gray-400">

            <span><span className="text-2xl text-green-600">৳ {property?.monthlyRent}</span> / month</span>
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg transition">
          <Link href={`/allProperty/${property?._id}`} >
            View Details
          </Link>

        </button>
      </div>
    </div>
  );
}