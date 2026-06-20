import { getOwner, getUserData, totalBookingsData, totalPorperty } from "@/lib/admin/getadmin";
import { FaHome, FaUsers, FaCalendarCheck, FaUserTie } from "react-icons/fa";

export default async function StatsSection() {
    const getTotalUsers = await getUserData()
    const getTotalOwners = await getOwner('owner')
    const totalBookings = await totalBookingsData()
    const getTtotalProperty = await totalPorperty()
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    Platform Overview
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                    {/* Total Properties */}
                    <div className="p-6 bg-gray-50 rounded-xl shadow-sm text-center
            hover:shadow-lg hover:-translate-y-1 transition duration-300">

                        <FaHome className="text-3xl text-blue-600 mx-auto" />
                        <h3 className="text-2xl font-bold mt-3 text-gray-800">{getTtotalProperty.length}</h3>
                        <p className="text-sm text-gray-500">Total Properties</p>
                    </div>

                    {/* Total Users */}
                    <div className="p-6 bg-gray-50 rounded-xl shadow-sm text-center
            hover:shadow-lg hover:-translate-y-1 transition duration-300">

                        <FaUsers className="text-3xl text-green-600 mx-auto" />
                        <h3 className="text-4xl font-bold mt-3 text-gray-800">{getTotalUsers.length}</h3>
                        <p className="text-sm text-gray-500">Registered Users</p>
                    </div>

                    {/* Bookings */}
                    <div className="p-6 bg-gray-50 rounded-xl shadow-sm text-center
            hover:shadow-lg hover:-translate-y-1 transition duration-300">

                        <FaCalendarCheck className="text-3xl text-purple-600 mx-auto" />
                        <h3 className="text-4xl font-bold mt-3 text-gray-800">{totalBookings.length}</h3>
                        <p className="text-sm text-gray-500">Total Bookings</p>
                    </div>

                    {/* Owners */}
                    <div className="p-6 bg-gray-50 rounded-xl shadow-sm text-center
            hover:shadow-lg hover:-translate-y-1 transition duration-300">

                        <FaUserTie className="text-3xl text-orange-600 mx-auto" />
                        <h3 className="text-4xl font-bold mt-3 text-gray-800">{getTotalOwners.length}</h3>
                        <p className="text-sm text-gray-500">Property Owners</p>
                    </div>

                </div>
            </div>
        </section>
    );
}