'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FiHome,
  FiFileText,
  FiSearch,
  FiUser,
} from 'react-icons/fi';

const Sidebar = () => {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `flex items-center gap-2 px-4 py-3 rounded-md transition text-sm ${
      pathname === path
        ? 'bg-violet-600 text-white'
        : 'hover:bg-gray-200 text-gray-700'
    }`;

  return (
    <aside className="bg-white shadow-lg h-screen p-4 w-64 fixed right-0 top-0 hidden md:block z-40">
      <div className="text-violet-700 text-xl font-bold mb-6">🎫 پنل کاربران</div>

      <nav className="flex flex-col space-y-1">
        <Link href="/" className={linkClass('/')}>
          <FiHome /> داشبورد
        </Link>
        <Link href="/tickets" className={linkClass('/tickets')}>
          <FiFileText /> ارسال تیکت
        </Link>
        <Link href="/status" className={linkClass('/status')}>
          <FiSearch /> وضعیت تیکت‌ها
        </Link>
        <Link href="/engineer/مهندس-کریمی" className={linkClass('/engineer/مهندس-کریمی')}>
          <FiUser /> داشبورد مهندس
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
