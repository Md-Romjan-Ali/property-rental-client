import {
    FaHome,
    FaHeart,
    FaUserShield,
} from "react-icons/fa";
import { MdPayments } from "react-icons/md";

const features = [
    {
        icon: <FaHome size={28} />,
        title: "Verified Properties",
        description:
            "Browse trusted and verified rental properties with complete details.",
    },
    {
        icon: <MdPayments size={28} />,
        title: "Secure Payments",
        description:
            "Pay rent securely through Stripe with a smooth checkout experience.",
    },
    {
        icon: <FaHeart size={28} />,
        title: "Favorites System",
        description:
            "Save your favorite properties and access them anytime.",
    },
    {
        icon: <FaUserShield size={28} />,
        title: "Role-Based Access",
        description:
            "Separate dashboards and permissions for tenants and property owners.",
    },
];

export default function WhyChoosePropertyHub() {
    return (
        <section className="py-20 bg-base-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold mb-4">
                        Why Choose{" "}
                        <span className="text-primary">PropertyHub?</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        A modern platform that makes renting and managing properties
                        simple, secure, and efficient.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 transition-all duration-300 group-hover:bg-white/20">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-gray-500 transition-colors duration-300">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}