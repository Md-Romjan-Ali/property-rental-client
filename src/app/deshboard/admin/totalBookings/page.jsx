import { totalBookingsData } from "@/lib/admin/getadmin";

export default async function TotalBookings() {
    const bookded = await totalBookingsData()
    console.log(bookded, 'totaal booked');
    return (
        <div className="max-w-full p-6">
            <h2 className="text-xl font-bold mb-4">All Bookings</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">Title</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Price</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {bookded.map((item) => (
                            <tr key={item._id} className="border-t">
                                <td className="p-3">{item.title}</td>
                                <td className="p-3">{item.userEmail}</td>
                                <td className="p-3">{item.price}</td>
                                <td className="p-3">
                                    <span
                                        className={`px-2 py-1 rounded text-white text-sm ${item.status === "Approved"
                                            ? "bg-green-500"
                                            : item.status === "Rejected"
                                                ? "bg-red-500"
                                                : "bg-yellow-500"
                                            }`}
                                    >
                                        {item.status}
                                    </span>
                                </td>

                                <td className="p-3 flex gap-2">
                                    <button

                                        className="px-3 py-1 bg-green-600 text-white rounded"
                                    >
                                        Approve
                                    </button>

                                    <button

                                        className="px-3 py-1 bg-red-600 text-white rounded"
                                    >
                                        Reject
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}