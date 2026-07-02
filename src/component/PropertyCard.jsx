import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

export default function PropertyCard({ property }) {
  return (
    <div className="group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-xl dark:hover:shadow-cyan-950/20 transition-all duration-500 transform hover:-translate-y-1.5 overflow-hidden flex flex-col h-full">

      {/* Image Container with Zoom Effect */}
      <div className="relative overflow-hidden aspect-[4/3] w-full bg-slate-100 dark:bg-slate-800">
        <Image
          src={property?.image || "/placeholder.jpg"}
          alt={property?.propertyName || "Property"}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* Dynamic Glassmorphism Tag */}
        <span className="absolute top-4 right-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-800 dark:text-slate-100 font-semibold text-[11px] px-3 py-1.5 rounded-full shadow-sm tracking-wide border border-white/20 dark:border-slate-700/30 uppercase">
          {property?.propertyType || "Property"}
        </span>
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">

        <div className="space-y-2">
          {/* Location */}
          <div className="flex items-center text-slate-400 dark:text-slate-500 text-xs font-semibold tracking-wider uppercase gap-1.5">
            <FaMapMarkerAlt className="text-rose-500 shrink-0 text-sm" />
            <span className="truncate">{property?.location || "Location N/A"}</span>
          </div>

          {/* Title */}
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 line-clamp-1 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300">
            {property?.propertyName}
          </h2>
        </div>

        {/* Rent & Action Section */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between gap-2">
          <div>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">Monthly Rent</p>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mt-0.5">
              <span className="text-xl font-black text-cyan-600 dark:text-cyan-400">৳{property?.monthlyRent}</span> / mo
            </p>
          </div>

          {/* Call to Action Link styled as a modern Button */}
          <Link
            href={`/allProperty/${property?._id}`}
            className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-cyan-500 dark:bg-slate-800 dark:hover:bg-cyan-500 text-white font-medium text-sm px-4 py-2.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/10"
          >
            Details
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </div>
  );
}