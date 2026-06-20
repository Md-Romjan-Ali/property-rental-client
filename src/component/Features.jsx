import { FaHome, FaCalendarCheck, FaUsers } from "react-icons/fa";

export default function FeaturesSection() {
    return (
        <section className="w-full py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    Key Features
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="p-6 bg-white rounded-xl shadow-sm text-center
            transition-all duration-300 transform
            hover:-translate-y-2 hover:shadow-xl hover:bg-blue-50">

                        <FaHome className="text-4xl text-blue-600 mx-auto transition duration-300 group-hover:scale-110" />
                        <h3 className="text-lg font-semibold text-gray-800 mt-4">
                            Property Management
                        </h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Easily add, update, and manage all your rental properties in one place.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 bg-white rounded-xl shadow-sm text-center
            transition-all duration-300 transform
            hover:-translate-y-2 hover:shadow-xl hover:bg-green-50">

                        <FaCalendarCheck className="text-4xl text-green-600 mx-auto transition duration-300" />
                        <h3 className="text-lg font-semibold text-gray-800 mt-4">
                            Booking System
                        </h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Track and manage bookings with real-time status updates.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-6 bg-white rounded-xl shadow-sm text-center
            transition-all duration-300 transform
            hover:-translate-y-2 hover:shadow-xl hover:bg-purple-50">

                        <FaUsers className="text-4xl text-purple-600 mx-auto transition duration-300" />
                        <h3 className="text-lg font-semibold text-gray-800 mt-4">
                            User Management
                        </h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Manage owners, tenants, and roles with full control.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}