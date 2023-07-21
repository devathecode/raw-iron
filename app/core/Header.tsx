"use client";

import React, {useEffect, useState} from 'react';
import Link from "next/link";

const Header = (props: any) => {
    const commonSpanClass = 'block absolute h-0.5 w-full bg-white transition-all duration-700 ease-in-out';
    const [navbar, setNavbar] = useState(false);
    const [open, setOpen] = useState(false);
    const menuOptions = [
        {
            id: 1,
            title: `Home`,
            url: '/'
        },
        {
            id: 2,
            title: `About`,
            url: '/about'
        },
        {
            id: 3,
            title: `Services`,
            url: '/services'
        },
        {
            id: 4,
            title: `Contact`,
            url: '/contact'
        }
    ];
    const handleHamburgerClick = () => {
        props.handleSubMenuOpen(!open);
        setOpen(!open);
    }

    const closeHamburger = () => {
        setOpen(false);
        props.handleSubMenuOpen(!open);
    }

    //navbar scroll changeBackground function
    const changeBackground = () => {
        if (window.scrollY >= 20) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })
    return (
        <nav
            className={`cpm fixed top-0 left-0 right-0 bottom-auto z-50 ${navbar ? 'bg-black py-2 shadow-2xl' : 'py-3 lg:py-6'}`}>
            <div className="grid grid-cols-12 gap-0 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8">
                <div className="col-span-9 md:col-span-3 justify-self-start my-auto">
                    <Link href="/"
                          className="flex flex-row cursor-pointer justify-center items-center text-white font-mono text-2xl font-bold">
                        <div className="font-mono tracking-widest uppercase">
                            raw iron
                        </div>
                    </Link>
                </div>
                <div className="col-span-3 md:col-span-9 justify-self-end cursor-pointer block sm:hidden"
                     onClick={handleHamburgerClick}>
                    <div className="w-6 relative mx-auto transition-all duration-700 ease-in-out rotate-0">
                        <div
                            className={`${commonSpanClass} ${open ? 'rotate-[135deg] top-4' : 'rotate-0 top-2'}`}></div>
                        <div className={`${commonSpanClass} ${open ? 'hidden' : 'rotate-0 top-4'}`}></div>
                        <div
                            className={`${commonSpanClass} ${open ? '-rotate-[135deg] top-4' : 'rotate-0 top-6'}`}></div>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-9 place-self-end cursor-pointer hidden md:block my-auto">
                    <ul className="flex justify-between items-center space-x-8">
                        {menuOptions.map((data) => {
                            return <li className={`text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-red-800 to-red-900 font-semibold uppercase`} key={data.id}>
                                <Link href={data.url}>{data.title}</Link>
                            </li>
                        })}
                        <li>
                            <button className="bg-gradient-to-r from-orange-700 via-red-800 to-red-900 uppercase p-2 rounded-sm">Become a member</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className={`${open ? 'active left-0 block' : '-left-[200%]'} fixed z-50 top-12 w-full transition-all px-5 duration-700 bg-black h-full border-t-2 border-gray-400`}>
                <ul className="grid grid-cols-12 gap-0 sm:gap-5 gap-y-5 place-items-start mt-5">
                    {menuOptions.map((data) => {
                        return <li key={data.id}
                                   className={`col-span-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-red-800 to-red-900 font-semibold uppercase`}>
                            <Link onClick={closeHamburger} href={data.url} >{data.title}</Link>
                        </li>
                    })}
                    <li className="col-span-12">
                        <button className="bg-gradient-to-r from-orange-700 via-red-800 to-red-900 uppercase p-2 rounded-sm">Become a member</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;