"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiMenuKebab, IoClose, IoDocument, IoLogIn } from "react-icons/io5";
import { GrScorecard } from "react-icons/gr";
import { FaCode, FaDiagramProject, FaBriefcase } from "react-icons/fa6";
import { MdVideoCameraFront } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { useSidebar } from "../Context/SidebarContext";

export default function Sidebar({ userData }) {
  const { isActive, setIsActive } = useSidebar();

  const router = useRouter();
  const { data: session, status } = useSession();
  const Data = session?.user;
  
  async function handleSubmit() {
    try {
      await signOut({ redirect: false });
      toast.success("Signed out successfully!", { autoClose: 1000 });
      router.push("/auth/Login");
    } catch (error) {
      console.error("Sign out error:", error);
      toast.error("Failed to sign out. Please try again.");
    }
  }

  return (
    <div className={`fixed top-0 left-0 h-screen z-10 flex transition-all duration-500 ease-in-out ${isActive ? "translate-x-0" : "-translate-x-64"}`}>
      {/* Sidebar */}
      <aside className="w-[16rem] h-screen px-6  py-4 overflow-y-auto bg-white shadow-lg border-r border-gray-200 dark:border-gray-700 dark:bg-[#0f0f0f]">
     <div className="flex items-center">
      <button
          onClick={() => setIsActive(!isActive)}
          className="bg-gray-200 dark:bg-gray-800 dark:text-white shadow-sm hover:opacity-75 text-xl rounded-full p-2 mb-4 flex items-center  "
        >
          <IoClose /> 
        </button>
        {/* <button onClick={() => router.push("/")}>
                <img
                  className="w-auto h-6 sm:h-7"
                  src="https://merakiui.com/images/full-logo.svg"
                  alt=""
                />
              </button> */}
              </div>
              
        <div className="flex items-center space-x-4">
          
          
          <img
            className="w-14 h-14 rounded-full"
            src={userData?.image || "/default-avatar.png"}
            alt="User Profile"
          />
          <div>
            <h1 className="text-sm font-semibold text-gray-800 dark:text-white">
              {status === "loading" ? "Loading..." : Data?.name || "Guest"}
            </h1>
            <Link href="/profile">
              <span className="text-sm text-gray-600 dark:text-white font-light cursor-pointer hover:underline">
                Edit Profile
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <div className="-mx-3 space-y-3">
            {[
              { name: "Portfolio", icon: <GrScorecard />, href: "/Portfolio" },
              { name: "Reports", icon: <IoDocument />, href: "/Reports" },
              { name: "Practice Mode", icon: <FaCode />, href: "/PracticeMode" },
              { name: "Meeting Room", icon: <MdVideoCameraFront />, href: "/MeetingRoom" },
              { name: "Projects", icon: <FaDiagramProject />, href: "/Projects" },
              { name: "Application Status", icon: <FaBriefcase />, href: "/ApplicationStatus" },
            ].map((item, index) => (
              <Link key={index} href={item.href}>
                <button
                  onClick={() => {
                    setIsActive(false);
                    router.push(item.href);
                  }}
                  className="flex items-center px-3 py-2 text-gray-800 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700"
                >
                  {item.icon}
                  <span className="mx-2 text-sm font-medium">{item.name}</span>
                </button>
              </Link>
            ))}

            <h2 className="text-lg px-3 font-semibold text-gray-900 dark:text-white">Skills:</h2>
            {Data?.skills?.length > 0 ? (
              <ul className="max-w-md px-3 -mt-4 mb-4 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                {Data.skills.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm px-3 text-gray-500 dark:text-gray-400">No skills added</p>
            )}

            {/* Logout / Login Button */}
            {session ? (
              <button
                onClick={handleSubmit}
                className="flex items-center w-full justify-center px-3 py-2 text-white transition-colors duration-300 transform rounded-lg  bg-red-600 hover:bg-red-700"
              >
                <IoLogIn className="rotate-180" />
                <span className="mx-2 text-sm font-medium">Logout</span>
              </button>
            ) : (
              <button
                onClick={() => router.push("/auth/Login")}
                className="flex items-center w-full justify-center px-3 py-2 text-white transition-colors duration-300 transform rounded-lg  bg-green-600 hover:bg-green-700"
              >
                <IoLogIn />
                <span className="mx-2 text-sm font-medium">Log In</span>
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Toggle Button */}
      
    </div>
  );
}
