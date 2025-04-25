import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl">Elevador Montacarga</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Dashboard
            </Link>
            <Link href="/acionamento" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Acionamento
            </Link>
            <Link href="/cabine" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Cabine
            </Link>
            <Link href="/torre" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Torre
            </Link>
            <Link href="/automacao" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Automação
            </Link>
            <Link href="/materiais" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Materiais
            </Link>
            <Link href="/relatorios" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Relatórios
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
