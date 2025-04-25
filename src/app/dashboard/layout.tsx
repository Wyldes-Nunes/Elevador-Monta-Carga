import React from 'react';
import Navbar from '@/components/layout/Navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <footer className="bg-white shadow-inner mt-8 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Sistema de Controle de Fabricação de Elevadores Montacarga
        </div>
      </footer>
    </div>
  );
}
