// Header.jsx
'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3">
          <img src="/assets/logo.png" className="h-12" alt="Logo" />
        </a>

        {/* Menu principal */}
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col md:flex-row md:space-x-8 font-medium mt-4 md:mt-0 text-sm">
            {[
              { label: 'LOJAS', href: '#' },
              { label: 'ALIMENTAÇÃO', href: '#' },
              { label: 'VILA GOURMET', href: '#' },
              { label: 'SAÚDE & CONVENIÊNCIA', href: '#' },
              { label: 'CINEMA', href: '#' },
              { label: 'EVENTOS', href: '#' },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block py-2 px-3 text-black hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}

            {/* Dropdown O SHOPPING */}
            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center py-2 px-3 text-black hover:text-gray-300 transition-colors"
              >
                O SHOPPING <FaChevronDown className="ml-1 text-xs" />
              </button>
              {dropdownOpen && (
                <div className="absolute top-12 z-20 bg-white shadow-md rounded-md w-44">
                  <ul className="text-sm text-black">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:text-gray-300 transition-colors"
                      >
                        História
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:text-gray-300 transition-colors"
                      >
                        Localização
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:text-gray-300 transition-colors"
                      >
                        Contato
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};