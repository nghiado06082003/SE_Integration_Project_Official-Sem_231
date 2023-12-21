import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoSIMBSC from "../img/SIMBSCLogo.png"

export default function AdminHeader(){


    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <header>
            <nav className="bg-white px-4 lg:px-6 py-2.5 border-b-2 border-primary-100">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex">
                        <Link to="/admin" className="flex items-center">
                            <img src={LogoSIMBSC} className="mr-3 h-10 sm:h-9" alt="SIMBSC Logo" />
                        </Link>
                        <div className="justify-between items-center flex w-auto ml-2" >
                            <ul className="flex font-medium flex-row space-x-8 mt-0">
                                <li>
                                    <Link to="/admin/event-management" className="block p-0 text-gray-700 border-gray-100 hover:bg-transparent border-0 hover:text-primary-700">Quản lý sự kiện</Link>
                                </li>
                                <li>
                                    <Link to="/admin/document-management" className="block p-0 text-gray-700 border-gray-100 hover:bg-transparent border-0 hover:text-primary-700">Quản lý tài liệu</Link>
                                </li>
                                <li>
                                    <Link to="/admin/member-management" className="block p-0 text-gray-700 border-gray-100 hover:bg-transparent border-0 hover:text-primary-700">Quản lý thành viên</Link>
                                </li>
                                <li className="group">
                                    <button className="block p-0 text-gray-700 border-gray-100 hover:bg-transparent border-0 hover:text-primary-700" onClick={handleToggleDropdown}>Tài khoản</button>
                                    {isDropdownOpen && (
                                    <ul className="absolute mt-2 bg-white border rounded border-gray-300 shadow-md ">
                                        <li>
                                            <Link to="/admin/profile" className="block px-4 py-1 text-gray-800 border-gray-100 hover:bg-transparent border-0 hover:text-primary-700">Thông tin cá nhân </Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="block px-4 py-1 text-gray-800 border-gray-100 hover:bg-transparent border-0 hover:text-primary-700">Chế độ người dùng</Link>
                                        </li>
                                        <li>
                                            <Link to="/404" className="block px-4 py-1 text-gray-800 border-gray-100 hover:bg-transparent border-0 hover:text-primary-700">Đăng xuất</Link>
                                        </li>
                                    </ul>
                                    )}
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="flex items-center">
                        <Link to="/log-in" className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none">Đăng nhập</Link>
                        <Link to="/sign-up" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none">Đăng ký</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}