// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Sidebar from '@/Components/Siderbar';
import Header from '@/components/Header';
import AuthProvider from '@/context/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'Client Portal',
  description: 'Support Ticket System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-100 font-sans text-right">
        <AuthProvider>
          <ToastContainer position="top-center" />

          <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="w-64 hidden md:block">
              <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 md:mr-64">
              <Header />
              <main className="mt-4">{children}</main>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
