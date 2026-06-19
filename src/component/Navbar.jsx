"use client"

import { authClient } from '@/lib/auth-client';
import { Button, Dropdown, Label } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';
import React from 'react';
import { IoHome } from 'react-icons/io5';
import { MdMenu } from 'react-icons/md';

const Navbar = () => {
    const pathName = usePathname()
    console.log(pathName, 'from navaber');
    const { data: session } = authClient.useSession()
    const name = session?.user?.name.split(" ")[0]
    console.log(session, 'from navabar');
    const logOutHanle = async () => {
        await authClient.signOut()
        redirect("/")
    }

    const LinksNav = <>
        <li className={`${pathName === '/' && 'border-b-4 pb-1'}`}><Link href={'/'}>Home</Link></li>
        <li className={`${pathName === '/allProperty' && 'border-b-4 pb-1'}`}><Link href={'/allProperty'}>All Properties</Link></li>

    </>
    const LinksProfile = <>
        <li className={`${pathName === `/deshboard/${session?.user?.role}` && 'border-b-4 pb-1'}`}><Link href={`/deshboard/${session?.user?.role}`}>Dashboard</Link></li>

    </>
    if (pathName.startsWith("/deshboard")) {
        return null;
    }
    return (

        <div className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-cyan-900/80 via-sky-800/80 to-blue-900/80 border-b border-cyan-400/20 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between text-white">

                {/* LEFT */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-cyan-500/20 border border-cyan-300/30">
                        <IoHome size={26} className="text-cyan-300" />
                    </div>

                    <h1 className="text-2xl font-bold tracking-wide">
                        Rental Home
                    </h1>
                </Link>

                {/* CENTER (Desktop) */}
                <ul className="hidden lg:flex gap-6 font-medium">
                    {LinksNav}
                    {session && LinksProfile}
                </ul>

                {/* RIGHT */}
                <div className="flex items-center gap-4">
                    {session ? (
                        <>
                            <Dropdown>
                                <Button aria-label="Menu" variant="secondary">
                                    <Image
                                        width={40}
                                        height={40}
                                        alt="profile"
                                        src={
                                            session?.user?.image ||
                                            "https://i.pravatar.cc/150"
                                        }
                                        className="rounded-full border-2 border-cyan-300"
                                    />
                                </Button>
                                <Dropdown.Popover>
                                    <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>

                                        <Dropdown.Item textValue="Copy link">
                                            <Link
                                                href={`/deshboard/${session?.user?.role}/profile`}
                                                className=""
                                            >
                                                Profile
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item textValue="Copy link">
                                            <Link
                                                href={`/deshboard/${session?.user?.role}`}
                                                className=""
                                            >
                                                {LinksProfile}
                                            </Link>
                                        </Dropdown.Item>

                                        <Dropdown.Item variant="danger">

                                            <button
                                                onClick={logOutHanle}
                                                className="w-full mt-2 bg-red-500 hover:bg-red-600 text-white py-1 rounded"
                                            >
                                                Sign Out
                                            </button>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Popover>
                            </Dropdown>

                            {/* Avatar */}
                            <div className="relative group">
                            </div>

                            <span className="hidden md:block text-cyan-100 font-medium">
                                Hi, {name}
                            </span>
                        </>
                    ) : (
                        <>
                            {/* Desktop Buttons */}
                            <div className="hidden lg:flex gap-3">
                                <Link href="/login">
                                    <button className="px-4 py-2 border border-cyan-300 text-cyan-200 rounded-lg hover:bg-cyan-500 hover:text-black transition">
                                        Login
                                    </button>
                                </Link>

                                <Link href="/registration">
                                    <button className="px-4 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition">
                                        Create Account
                                    </button>
                                </Link>
                            </div>


                            <Dropdown>
                                <Button className="lg:hidden text-black" aria-label="Menu">
                                    {/* Mobile Menu Button */}

                                    <MdMenu size={28} />

                                </Button>
                                <Dropdown.Popover>
                                    <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>

                                        <Dropdown.Item textValue="Copy link">
                                            <div className="lg:hidden border-t border-cyan-400/20 px-4 py-4">
                                                <ul className="flex flex-col gap-3">
                                                    {/* {LinksNav} */}
                                                    {session &&

                                                        <>
                                                            <Dropdown.Item>
                                                                {<li className={`${pathName === '/my-booking' && 'border-b-4 pb-1'}`}><Link href={'/my-booking'}>My Bookings</Link></li>}
                                                            </Dropdown.Item>
                                                        </>
                                                    }

                                                </ul>
                                            </div>
                                        </Dropdown.Item>

                                        <Dropdown.Item>
                                            <li className={`${pathName === '/my-booking' && 'border-b-4 pb-1'}`}><Link href={'/allProperty'}>All Properties</Link></li>
                                        </Dropdown.Item>

                                        {!session && (

                                            <Dropdown.Item variant="danger">
                                                <Link className='hover:bg-gray-300 py-2 px-3 rounded-2xl' href="/login">Login</Link>
                                                <Link className='hover:bg-gray-300 py-2 px-3 rounded-2xl' href="/register">Register</Link>
                                            </Dropdown.Item>


                                        )}

                                    </Dropdown.Menu>
                                </Dropdown.Popover>
                            </Dropdown>
                        </>
                    )}
                </div>
            </div>

        </div>
    );
};


export default Navbar;