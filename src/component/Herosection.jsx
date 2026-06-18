import { Description, Label, ListBox, SearchField } from "@heroui/react";
import SearchSection from "./SearchSection";

export default function HeroSection() {
    return (
        <section
            className="relative h-[80vh] flex items-center justify-center text-white"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-5xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-300">
                    Find Your Perfect <br /> Rental Home
                </h1>

                <p className="mt-4 text-sm md:text-lg text-gray-200">
                    Discover comfortable, affordable and verified rental properties <br />
                    in your desired location. Book your next home easily and safely.
                </p>
                <SearchSection />
            </div>


        </section>
    );
}

