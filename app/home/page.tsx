import React from 'react';
import Image from "next/image";

const Page = () => {
    return (
        <>
            <div
                className="w-full h-[38rem] bg-[url('https://i.postimg.cc/2jgj5JBj/fitness.jpg')] bg-cover bg-fixed bg-center flex items-center justify-start">
                {/*<Image width="1600" height="700" src="https://i.postimg.cc/hPXC2QXt/fitness.webp" alt=""/>*/}
                {/*<Image width="1600" height="700" src="https://i.postimg.cc/0jYYbSZ9/fitness.webp" alt=""/>*/}
                {/*<Image width="1600" height="700" src="https://i.postimg.cc/NFjsHqkL/fitness.jpg" alt=""/>*/}
                {/*<Image width="1600" height="700" src="https://i.postimg.cc/2jgj5JBj/fitness.jpg" className="-mt-20" alt=""/>*/}
                <div className="cpm">
                    <div className="grid grid-cols-12 gap-2 md:gap-4 lg:gap-6 xl:gap-8">
                        <div className="col-span-12 flex items-center">
                            <div className="w-24 h-1 bg-gradient-to-r from-orange-700 via-red-800 to-red-900">&nbsp;</div>
                            <span className="ml-2 uppercase text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-red-800 to-red-900 font-mono">With Patrick Peter</span>
                        </div>
                        <div className="col-span-12 md:col-span-10 lg:col-span-9 xl:col-span-7">
                            <h1 className="text-white text-5xl md:text-6xl uppercase font-bold">
                                Build perfect body shape for good and healthy life
                            </h1>
                            <button className="bg-gradient-to-r from-orange-700 via-red-800 to-red-900 uppercase py-4 px-6 rounded-sm mt-8">Become a member</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="cpm">
                    <div className="grid grid-cols-12 gap-2 sm:gap-3 md:gap-7 lg:gap-20 py-10">
                        <div className="col-span-12 md:col-span-6">
                            <Image width="1600" height="900" src="https://i.postimg.cc/hPXC2QXt/fitness.webp" alt=""/>
                        </div>
                        <div className="col-span-12 md:col-span-6 my-auto">
                            <div className="flex items-center">
                                <div className="w-24 h-1  bg-gradient-to-r from-orange-500 via-red-600 to-red-700">&nbsp;</div>
                                <span className="ml-2 uppercase text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-600 to-red-700 font-mono">About our gym</span>
                            </div>
                            <h1 className="text-blue-950/90 text-4xl md:text-5xl uppercase font-bold my-7">
                                Safe body building proper solutions that saves our valuable time!
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;