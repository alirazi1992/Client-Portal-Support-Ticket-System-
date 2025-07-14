// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { UserSettingsProvider } from '@/context/UserSettingsContext';
import AuthProvider from '@/context/AuthProvider';
import Sidebar from '@/Components/Siderbar';
import Header from '@/Components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'Client Portal',
  description: 'Support Ticket System',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa">
      <body>
        <UserSettingsProvider>
          <AuthProvider>
            <ToastContainer position="top-center" />
            <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
              <div className="md:w-64 w-full md:block hidden">
                <Sidebar />
              </div>
              <div className="flex-1 p-4 md:mr-64">
                <Header />
                <main className="mt-4">{children}</main>
              </div>
            </div>
          </AuthProvider>
        </UserSettingsProvider>
      </body>
    </html>
  );
}
