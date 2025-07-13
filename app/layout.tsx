import './globals.css';
import type { Metadata } from 'next';
import Sidebar from '@/Components/Siderbar';
import Header from '@/Components/Header';
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gray-100 font-sans text-right text-gray-800">
        <AuthProvider>
          <ToastContainer position="top-center" />
          <div className="flex flex-col md:flex-row min-h-screen">
            <div className="hidden md:block md:w-64">
              <Sidebar />
            </div>
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
