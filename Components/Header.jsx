'use client';

import { useEffect, useState } from 'react';
import { FiBell, FiUser } from 'react-icons/fi';

const Header = () => {
  const [time, setTime] = useState<string>(
    new Date().toLocaleTimeString('fa-IR')
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('fa-IR'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-white rounded-md shadow p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800">پنل کاربران</div>

      <div className="flex items-center gap-6 text-sm text-gray-600">
        <span>🕒 {time}</span>

        <button className="relative text-gray-600 hover:text-blue-500 transition">
          <FiBell className="text-xl" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            ۳
          </span>
        </button>

        <div className="flex items-center gap-2">
          <FiUser className="text-xl text-gray-700" />
          <span className="text-sm">کاربر</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
