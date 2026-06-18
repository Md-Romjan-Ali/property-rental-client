import { userSession } from "@/lib/session";
import { Button, Drawer, Menu } from "@heroui/react";
import Link from "next/link";
import { BiBell } from "react-icons/bi";
import { BsHouse } from "react-icons/bs";
import { SlMagnifier } from "react-icons/sl";

export async function Sidebar() {
    const user = await userSession()
    const navigatinItem = {
        admin: [
            { icon: BsHouse, label: "Home", href: '/deshboard/admin' },
            { icon: SlMagnifier, label: "Search", href: '/deshboard/owner' },
            { icon: BiBell, label: "Notifications", href: '/deshboard/owner' },
        ],
        owner: [
            { icon: BsHouse, label: "Home", href: '/deshboard/owner' },
            { icon: SlMagnifier, label: "Search", href: '/deshboard/owner' },
            { icon: BiBell, label: "Notifications", href: '/deshboard/owner' },
        ],
        rentar: [
            { icon: BsHouse, label: "Home", href: '/deshboard/rentar' },
            { icon: SlMagnifier, label: "Search", href: '/deshboard/owner' },
            { icon: BiBell, label: "Notifications", href: '/deshboard/owner' },
        ],
    };
    const navItems = navigatinItem[user?.role || 'rentar']

    return (
        <div className="">
            <h1>navigation bar</h1>
            <nav className="hidden md:flex flex-col gap-1">
                {navItems.map((item) => (
                    <Link
                        href={item.href}
                        key={item.label}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                        type="button"
                    >
                        <item.icon className="size-5 text-muted" />
                        {item.label}
                    </Link>
                ))}
            </nav>
            <Drawer>
                <Button variant="secondary" className={'md:hidden'}>
                    <Menu />
                    Menu
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                <nav className="flex flex-col gap-1">
                                    {navItems.map((item) => (
                                        <Link
                                            href={item.href}
                                            key={item.label}
                                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                                        >
                                            <item.icon className="size-5 text-muted" />
                                            {item.label}
                                        </Link>
                                    ))}
                                </nav>
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </div>

    );
}