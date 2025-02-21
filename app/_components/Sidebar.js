'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { CiMenuKebab } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export default function Sidebar() {
    const [isActive, setIsActive] = useState(false);
    const router = useRouter();

    return (
        <div className={`fixed top-0 left-0 h-screen z-10 flex transition-all duration-500 ease-in-out ${
            isActive ? "translate-x-0" : "-translate-x-64"
        }`}>

            {/* Sidebar */}
            <aside className="w-64 h-screen px-5 py-8 overflow-y-auto bg-white shadow-lg dark:bg-gray-900">
                <Link href="#">
                    <img className="w-auto h-7" src="https://merakiui.com/images/logo.svg" alt="Logo" />
                </Link>
                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav className="-mx-3 space-y-3">
                        {[
                            { name: 'Home', icon: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' },
                            { name: 'Dashboard', icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605' },
                            { name: 'Projects', icon: 'M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z' },
                            { name: 'Tasks', icon: 'M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12' },
                            { name: 'Reporting', icon: 'M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z' },
                            { name: 'Users', icon: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' }
                        ].map((item, index) => (
                            <Link key={index} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                                </svg>
                                <span className="mx-2 text-sm font-medium">{item.name}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </aside>

            {/* Toggle Button */}
            <div className="h-screen w-11 flex justify-start items-center">
                <button
                    onClick={() => setIsActive(!isActive)}
                    className="w-[90%]  bg-gray-900 text-white flex justify-center items-center text-2xl  py-10 rounded-e-2xl transition-transform duration-500 ease-in-out"
                >
                    {isActive ? <IoClose /> : <CiMenuKebab />}
                </button>
            </div>
        </div>
    );
}
