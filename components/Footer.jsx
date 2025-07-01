// Footer.jsx
'use client';

import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-sm text-black border-t border-gray-200 font-primary">
      <div className="max-w-screen-2xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {/* HORÁRIOS */}
        <div className="md:col-span-2">
          <div className="flex justify-between items-center bg-[#eaf6f7] rounded-md px-4 py-2 mb-4">
            <h3 className="text-cyan-700 font-semibold uppercase text-base">Horários</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 104 72" fill="none">
              <circle cx="52" cy="36" r="51" stroke="#228E99" strokeOpacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M71.8333 47.3337L52 36.0003V7.66699" stroke="#228E99" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Lojas */}
            <div>
              <h4 className="text-sky-800">Lojas</h4>
              {["Segunda à Sexta:|10h - 22h", "Sábado|10h - 22h", "Domingo|13h - 21h", "Feriado|13h - 21h"].map((entry) => {
                const [label, time] = entry.split('|');
                return (
                  <div key={label} className="py-1 border-b" style={{ borderColor: '#d6dadd' }}>
                    <p>{label}</p>
                    <p>{time}</p>
                  </div>
                );
              })}
            </div>

            {/* Alimentação */}
            <div>
              <h4 className="text-lime-600">Alimentação</h4>
              {["Segunda à Sexta:|10h - 22h", "Sábado|10h - 22h", "Domingo|11h - 22h", "Feriado|11h - 22h"].map((entry) => {
                const [label, time] = entry.split('|');
                return (
                  <div key={label} className="py-1 border-b" style={{ borderColor: '#d6dadd' }}>
                    <p>{label}</p>
                    <p>{time}</p>
                  </div>
                );
              })}
            </div>

            {/* Vila Gourmet */}
            <div>
              <h4 className="text-orange-500">Vila Gourmet</h4>
              {["Segunda à Sexta:|12h - 2h", "Sábado|12h - 2h", "Domingo|12h - 2h", "Feriado|12h - 2h"].map((entry) => {
                const [label, time] = entry.split('|');
                return (
                  <div key={label} className="py-1 border-b" style={{ borderColor: '#d6dadd' }}>
                    <p>{label}</p>
                    <p>{time}</p>
                  </div>
                );
              })}
            </div>

            {/* Saúde e Conveniência */}
            <div>
              <h4 className="text-red-600">Saúde e Conveniência</h4>
              {["Segunda à Sexta:|06h - 22h", "Sábado|06h - 22h", "Domingo|06h - 21h", "Feriado|06h - 21h"].map((entry) => {
                const [label, time] = entry.split('|');
                return (
                  <div key={label} className="py-1 border-b" style={{ borderColor: '#d6dadd' }}>
                    <p>{label}</p>
                    <p>{time}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CONTATO */}
        <div>
          <div className="flex justify-between items-center bg-[#eaf6f7] rounded-md px-4 py-2 mb-4">
            <h3 className="text-cyan-700 font-semibold uppercase text-base">Contato</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 102 72" fill="none">
              <path d="M42.925 67.0258L28.05 74.6758C28.05 69.5758 28.05 64.4758 28.05 61.0758C18.7 54.2758 12.75 44.508 12.75 33.0258C12.75 13.908 29.75 -1.82422 51 -1.82422C72.25 -1.82422 89.25 13.4758 89.25 33.0258C89.25 52.1508 72.25 67.8758 51 67.8758C48.45 67.8758 45.475 67.4508 42.925 67.0258Z" stroke="#228E99" strokeOpacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M67.5749 43.2266C58.2249 52.5766 43.3499 52.5766 33.9999 43.2266" stroke="#228E99" strokeOpacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M42.4999 21.9746V26.2246" stroke="#228E99" strokeOpacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M59.5 21.9746V26.2246" stroke="#228E99" strokeOpacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p>Estrada Prof. Leandro Faria Sarzedas, 1300<br />
            Bairro Harmonia, Rio das Ostras, RJ<br />
            CEP 28895-638</p>

          <div className="mt-4 space-y-2">
            <a href="#" className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 18 18" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.10594 8.10927C8.55334 8.83523 9.16448 9.44637 9.89043 9.89377L10.5753 9.48284C10.874 9.30363 11.2526 9.32909 11.5246 9.54669L12.8539 10.6101C13.04 10.7589 13.1534 10.9803 13.1656 11.2183C13.1778 11.4562 13.0875 11.688 12.9176 11.8551L12.3166 12.4459C11.4889 13.2621 10.2079 13.4004 9.22506 12.7795C7.62203 11.7427 6.25707 10.3777 5.22023 8.77466C4.59934 7.79184 4.73756 6.51077 5.55382 5.68302L6.14465 5.0821C6.3117 4.9122 6.54348 4.82193 6.78144 4.8341C7.0194 4.84627 7.24077 4.95972 7.38961 5.14577L8.45302 6.47504C8.67061 6.74704 8.69608 7.12567 8.51687 7.42436L8.10594 8.10927Z" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M4.7229 15.6551L2.4754 16.0307C2.33525 16.0541 2.19243 16.0083 2.09195 15.9078C1.99148 15.8074 1.94574 15.6645 1.96915 15.5244L2.34465 13.2768C0.151572 9.86832 0.881105 5.35477 4.03629 2.81077C7.19148 0.26677 11.7571 0.510897 14.623 3.37685C17.4889 6.2428 17.733 10.8084 15.1889 13.9636C12.6449 17.1187 8.13132 17.8482 4.7229 15.6551Z" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              <span>WhatsApp</span>
            </a>
            <a href="mailto:contato@shopping.com" className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0a2.25 2.25 0 00-2.25-2.25H4.5A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span>Fale por e-mail</span>
            </a>
          </div>


            <p className="mt-4">Siga-nos</p>
            <div className="flex space-x-3 mt-2">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-pink-500 rounded-full"
              >
                <FaInstagram className="text-white text-xl" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full"
              >
                <FaFacebookF className="text-white text-xl" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-green-600 rounded-full"
              >
                <FaLinkedinIn className="text-white text-xl" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-black rounded-full"
              >
                <FaTiktok className="text-white text-xl" />
              </a>
            </div>
        </div>

        {/* ESTACIONAMENTO */}
        <div>
          <div className="flex justify-between items-center bg-[#eaf6f7] rounded-md px-4 py-2 mb-4">
            <h3 className="text-cyan-700 font-semibold uppercase text-base">Estacionamento</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 114 72" fill="none">
              <path d="M92.0503 26.501L88.065 7.44398C86.9108 1.94348 82.061 -1.99902 76.437 -1.99902H38.057C32.5423 -1.99902 27.7495 1.80098 26.4955 7.17323L21.9783 26.501" stroke="#228E99" strokeOpacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
              <path fillRule="evenodd" clipRule="evenodd" d="M15.4376 74.001H26.1251C30.0581 74.001 33.2501 70.809 33.2501 66.876V62.126H80.7501V66.876C80.7501 70.809 83.9421 74.001 87.8751 74.001H98.5626C101.84 74.001 104.5 71.341 104.5 68.0635V40.751C104.5 32.8802 98.1209 26.501 90.2501 26.501H23.7501C15.8794 26.501 9.50012 32.8802 9.50012 40.751V68.0635C9.50012 71.341 12.1601 74.001 15.4376 74.001Z" stroke="#228E99" strokeOpacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M104.5 21.75L92.0552 26.5" stroke="#228E99" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21.9926 26.5L9.50012 21.75" stroke="#228E99" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M86.6875 45.5H74.8125" stroke="#228E99" strokeOpacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M39.1876 45.5H27.3126" stroke="#228E99" strokeOpacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
            <ul className="divide-y" style={{ borderColor: '#d6dadd' }}>
            <li className="py-2 border-b" style={{ borderColor: '#d6dadd' }}>
                Período de 12h – R$ 12,00
            </li>
            <li className="py-2 border-b" style={{ borderColor: '#d6dadd' }}>
                Pernoite – R$ 50,00
            </li>
            <li className="py-2 border-b" style={{ borderColor: '#d6dadd' }}>
                Perda de Ticket – R$ 12,00
            </li>
            </ul>
        </div>
      </div>

      {/* RODAPÉ INFERIOR */}
      <div className="border-t border-gray-200 mt-6 py-4 text-center text-sm px-4 flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto gap-2">
        <p>© Todos os direitos reservados  ●  Shopping Plaza Rio das Ostras</p>
        <button className="text-black hover:text-gray-300 transition-colors">Política de privacidade</button>
      </div>
    </footer>
  );
}
