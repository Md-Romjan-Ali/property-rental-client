
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const ClientSasyCard = ({ review }) => {
    return (
        <div className="max-w-md w-full border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">

            <div className="p-6">
                {/* Quote Icon */}
                <FaQuoteLeft className="text-3xl text-primary mb-4 opacity-80" />

                <div className="flex items-center gap-1 mb-5">
                    {[...Array(5)].map((_, index) => (
                        <FaStar
                            key={index}
                            className={`text-lg ${index < Number(review.rating)
                                ? "text-yellow-400"
                                : "text-slate-300"
                                }`}
                        />
                    ))}
                </div>

                {/* User Info */}
                <div className="gap-4 border-t pt-4">
                    <Image
                        src={review.image}
                        alt={review.name}
                        width={200}
                        height={200}
                        className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-primary"
                    />

                    <div>
                        <h4 className="font-bold text-2xl my-3 text-center text-slate-900">{review.name}</h4>
                        <p className="text-sm text-center text-slate-500">{review.email}</p>
                    </div>
                    <p className="bg-gray-50 rounded-2xl my-3 border-2 border-gray-300 p-5">{review.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ClientSasyCard;