'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FiBell, FiUser } from 'react-icons/fi';

const Header = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString('fa-IR'));
  const [notifOpen, setNotifOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const notifRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  // Update clock every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('fa-IR'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notifRef.current && !notifRef.current.contains(event.target as Node)
      ) {
        setNotifOpen(false);
      }
      if (
        userRef.current && !userRef.current.contains(event.target as Node)
      ) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white rounded-md shadow p-4 flex justify-between items-center relative">
      <div className="text-xl font-bold text-gray-800">پنل کاربران</div>

      <div className="flex items-center gap-6 text-sm text-gray-600">
        <span>🕒 {time}</span>

        {/* 🔔 Notification */}
        <div className="relative" ref={notifRef}>
          <button
            className="relative text-gray-600 hover:text-blue-500 transition"
            onClick={() => setNotifOpen(!notifOpen)}
          >
            <FiBell className="text-xl" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              ۳
            </span>
          </button>
          {notifOpen && (
            <div className="absolute left-0 mt-2 bg-white shadow-md rounded w-64 p-2 text-right z-50">
              <p className="text-sm text-gray-800 mb-2 font-semibold">اعلان‌ها</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>📬 پاسخ تیکت شما ارسال شد.</li>
                <li>📄 فایل جدیدی ضمیمه شده است.</li>
                <li>⛴ وضعیت تیکت شما به در حال بررسی تغییر یافت.</li>
              </ul>
            </div>
          )}
        </div>

        {/* 👤 User Dropdown */}
        <div className="relative" ref={userRef}>
          <button
            className="flex items-center gap-2 hover:text-blue-500 transition"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
          >
            <FiUser className="text-xl text-gray-700" />
            <span className="text-sm">کاربر</span>
          </button>
          {userMenuOpen && (
            <div className="absolute left-0 mt-2 bg-white shadow-md rounded w-40 p-2 text-right z-50">
              <ul className="text-sm text-gray-700">
                <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                  <Link href="/account">تنظیمات حساب</Link>
                </li>
                <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                  خروج
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
