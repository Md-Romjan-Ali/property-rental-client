import FavouriteDelete from "@/component/alldeleteHandle/Favourite";
import { userSession } from "@/lib/session";
import { getFavourite } from "@/lib/tanant/tanantget";
import Image from "next/image";

const FavouritePage = async () => {
    const user = await userSession()
    const favourite = await getFavourite(user?.id);
    console.log(favourite, 'from favoiurite page');

    return (
        <div className="p-4 md:p-8">
            <h1 className="text-2xl font-bold mb-6">
                Favourite Properties
            </h1>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border rounded-lg shadow-md">

                    {/* Table Head */}
                    <thead className="bg-gray-100 text-left text-sm text-gray-600 uppercase">
                        <tr>
                            <th className="p-3">Image</th>
                            <th className="p-3">Property</th>
                            <th className="p-3">Location</th>
                            <th className="p-3">Price</th>
                            <th className="p-3 text-center">Action</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {favourite?.map((item) => (
                            <tr
                                key={item._id}
                                className="border-t hover:bg-gray-50"
                            >

                                {/* Image */}
                                <td className="p-3">
                                    <Image
                                        src={item.image}
                                        alt={item.propertyName}
                                        width={70}
                                        height={70}
                                        className="w-16 h-16 object-cover rounded-md"
                                    />
                                </td>

                                {/* Property Name */}
                                <td className="p-3 font-medium">
                                    {item.propertyName}
                                </td>

                                {/* Location */}
                                <td className="p-3 text-gray-600">
                                    {item.location || "N/A"}
                                </td>

                                {/* Price */}
                                <td className="p-3 font-semibold text-green-600">
                                    ${item.monthlyRent}
                                </td>

                                {/* Action */}
                                <td className="p-3 text-center">
                                    <FavouriteDelete id={item._id} />

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FavouritePage;