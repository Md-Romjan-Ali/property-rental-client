import { userSession } from "@/lib/session";
import { Button, Drawer, Menu } from "@heroui/react";
import Link from "next/link";
import { BsHouse, BsJournalCheck } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { HiOutlineClipboardDocumentCheck, HiUsers } from "react-icons/hi2";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoHome, IoReceiptOutline } from "react-icons/io5";


export async function Sidebar() {
    const user = await userSession();

    const navigatinItem = {
        admin: [
            { icon: CgProfile, label: "Profile", href: "/deshboard/admin/profile" },
            { icon: BsHouse, label: "Home", href: "/deshboard/admin" },
            { icon: FaUsers, label: "All users", href: "/deshboard/admin/totalUsers" },
            { icon: HiUsers, label: "All Property", href: "/deshboard/admin/totalOwners" },
        ],
        owner: [
            { icon: CgProfile, label: "Profile", href: "/deshboard/owner/profile" },
            { icon: BsHouse, label: "Home", href: "/deshboard/owner" },
            { icon: IoIosAddCircleOutline, label: "Add Property", href: "/deshboard/owner/addProperty" },
            { icon: IoReceiptOutline, label: "My Property", href: "/deshboard/owner/myproperty" },
            { icon: HiOutlineClipboardDocumentCheck, label: "Booked Property", href: "/deshboard/owner/bookedProperty" },
        ],
        tanant: [
            { icon: CgProfile, label: "Profile", href: "/deshboard/tanant/profile" },
            { icon: BsHouse, label: "Home", href: "/deshboard/tanant" },
            { icon: BsJournalCheck, label: "My Booking", href: "/deshboard/tanant/myBooking" },
            { icon: GiSelfLove, label: "favourite", href: "/deshboard/tanant/favourite" },
        ],
    };

    const navItems = navigatinItem[user?.role || "tanant"];

    return (
        <div className="bg-white md:min-h-screen md:w-64 border-r border-slate-200 shadow-sm pl-5">
            {/* Logo */}
            <Link href="/" className="hidden md:flex items-center gap-3 mb-10">
                <div className="p-2 rounded-full bg-cyan-50 border border-cyan-200">
                    <IoHome size={24} className="text-cyan-600" />
                </div>

                <h1 className="text-xl font-bold text-slate-800">
                    Rental Home
                </h1>
            </Link>

            {/* Dashboard Title */}
            <h2 className="text-xl hidden md:flex items-center gap-2 font-semibold text-slate-700 mb-6">
                <span className="text-cyan-600 text-2xl font-bold capitalize">
                    {user?.role}
                </span>{" "}
                Dashboard
            </h2>

            {/* Desktop Menu */}
            <nav className="hidden md:flex flex-col gap-2">
                {navItems?.map((item) => (
                    <Link
                        href={item.href}
                        key={item.label}
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-200"
                    >
                        <item.icon className="text-lg" />
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>

            {/* Mobile Drawer */}
            <div className="md:hidden">
                <Drawer>

                    <Button
                        variant="secondary"
                        className="w-full bg-cyan-50 text-cyan-700 border border-cyan-200"
                    >
                        <Menu />
                        Menu
                    </Button>

                    <Drawer.Backdrop>
                        <Drawer.Content
                            placement="left"
                            className="bg-white"
                        >
                            <Drawer.Dialog>
                                <Drawer.CloseTrigger />

                                <Drawer.Header>
                                    <Drawer.Heading className="text-slate-800">
                                        {/* Logo */}
                                        <Link href="/" className="flex items-center gap-3 mb-10">
                                            <div className="p-2 rounded-full bg-cyan-50 border border-cyan-200">
                                                <IoHome size={24} className="text-cyan-600" />
                                            </div>

                                            <h1 className="text-xl font-bold text-slate-800">
                                                Rental Home
                                            </h1>
                                        </Link>

                                        {/* Dashboard Title */}
                                        <h2 className="text-xl flex font-semibold text-slate-700 mb-6">
                                            <span className="text-cyan-600 text-2xl font-bold capitalize">
                                                {user?.role}
                                            </span>{" "}
                                            Dashboard
                                        </h2>
                                    </Drawer.Heading>
                                </Drawer.Header>

                                <Drawer.Body>
                                    <nav className="flex flex-col gap-2">
                                        {navItems.map((item) => (
                                            <Link
                                                href={item.href}
                                                key={item.label}
                                                className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-200"
                                            >
                                                <item.icon className="text-lg" />
                                                <span>{item.label}</span>
                                            </Link>
                                        ))}
                                    </nav>
                                </Drawer.Body>
                            </Drawer.Dialog>
                        </Drawer.Content>
                    </Drawer.Backdrop>
                </Drawer>
            </div>
        </div>
    );
}