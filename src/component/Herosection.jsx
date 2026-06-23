"use client"
import { motion } from "motion/react"
import SearchSection from "./SearchSection";

export default function HeroSection() {
    return (
        <motion.section
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1,
                transition: { duration: 1, ease: "easeIn" }
            }}
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
            <div

                className="relative z-10 text-center max-w-5xl px-4">
                <motion.h1
                    initial={{
                        opacity: 0,
                        x: -100
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 1, ease: 'easeIn' }
                    }}
                    className="text-4xl md:text-6xl font-bold leading-tight text-gray-300">
                    Find Your Perfect <br /> Rental Home
                </motion.h1>

                <motion.p
                    initial={{
                        opacity: 0,
                        x: -100
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 2, ease: 'easeIn' }
                    }}
                    className="mt-4 text-sm md:text-lg text-gray-200">
                    Discover comfortable, affordable and verified rental properties <br />
                    in your desired location. Book your next home easily and safely.
                </motion.p>
                <SearchSection />
            </div>


        </motion.section>
    );
}

