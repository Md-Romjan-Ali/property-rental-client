import { HiHomeModern } from "react-icons/hi2";
import { FaCalendarCheck } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";

const OwnerPage = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Total Properties */}
                <div className="bg-white rounded-2xl p-6 shadow border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-slate-500 text-sm">Total Properties</p>
                            <h2 className="text-3xl font-bold mt-2">24</h2>
                        </div>
                        <div className="p-4 bg-blue-100 rounded-xl">
                            <HiHomeModern className="text-3xl text-blue-600" />
                        </div>
                    </div>
                </div>

                {/* Total Bookings */}
                <div className="bg-white rounded-2xl p-6 shadow border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-slate-500 text-sm">Total Bookings</p>
                            <h2 className="text-3xl font-bold mt-2">156</h2>
                        </div>
                        <div className="p-4 bg-green-100 rounded-xl">
                            <FaCalendarCheck className="text-3xl text-green-600" />
                        </div>
                    </div>
                </div>

                {/* Total Earnings */}
                <div className="bg-white rounded-2xl p-6 shadow border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-slate-500 text-sm">Total Earnings</p>
                            <h2 className="text-3xl font-bold mt-2">$12,450</h2>
                        </div>
                        <div className="p-4 bg-yellow-100 rounded-xl">
                            <MdAttachMoney className="text-3xl text-yellow-600" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OwnerPage;