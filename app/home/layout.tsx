"use client";

import React, {useState} from 'react';
import Header from "@/app/core/Header";
import Footer from "@/app/core/Footer";

export default function HomeLayout({children,}: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`${open && 'h-screen overflow-hidden'} font-serif`}>
            <Header handleSubMenuOpen={setOpen}/>
                <div className="mt-24">
                    {children}
                </div>
            <Footer/>
        </div>
    )
}