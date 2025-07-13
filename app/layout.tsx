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
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans text-right transition-colors duration-300">
        <AuthProvider>
          {/* Toasts for all pages */}
          <ToastContainer position="top-center" autoClose={3000} />

          {/* Layout wrapper */}
          <div className="flex flex-col md:flex-row min-h-screen">
            {/* Sidebar */}
            <aside className="hidden md:block md:w-64">
              <Sidebar />
            </aside>

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
