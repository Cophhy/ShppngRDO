// Header.jsx
'use client';

import { useState } from 'react';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm font-primary">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3">
          <img src="/assets/logo.png" className="h-12" alt="Logo" />
        </a>

        {/* Menu principal */}
        <ul className="hidden md:flex items-center space-x-8 text-sm uppercase">
          {[
            { label: 'Lojas', href: '#' },
            { label: 'Alimentação', href: '#' },
            { label: 'Vila Gourmet', href: '#' },
            { label: 'Saúde & Conveniência', href: '#' },
            { label: 'Cinema', href: '#' },
            { label: 'Eventos', href: '#' },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-black hover:text-gray-500 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}

          {/* Dropdown "O Shopping" */}
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center text-black hover:text-gray-500 transition-colors"
            >
              O SHOPPING <FaChevronDown className="ml-1" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white divide-y divide-gray-100 rounded shadow-lg">
                <ul className="py-1">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black hover:text-gray-500 transition-colors"
                    >
                      Localização
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black hover:text-gray-500 transition-colors"
                    >
                      Contato
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>

        {/* Busca */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-black hover:text-gray-500 transition-colors text-lg"
          >
            <FaSearch />
          </button>
          {searchOpen && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchTerm.trim()) {
                  router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
                }
              }}
            >
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-1 text-black focus:outline-none focus:ring focus:border-accent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar..."
              />
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}
