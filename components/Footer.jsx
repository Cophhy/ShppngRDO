// Footer.jsx
'use client';

import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-sm text-black border-t border-gray-200">
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
              {["Segunda à Sexta:|12h - 02h", "Sábado|12h - 02h", "Domingo|12h - 02h", "Feriado|12h - 02h"].map((entry) => {
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
          <p>
            Estrada Prof. Leandro Faria Sarzedas, 1300<br />
            Bairro Harmonia, Rio das Ostras, RJ<br />
            CEP 28895-638
          </p>

          <div className="mt-4 space-y-2">
            <a href="#" className="flex items-center space-x-2">
              <FaWhatsapp /> WhatsApp
            </a>
            <a href="#" className="flex items-center space-x-2">
              <FaInstagram /> Instagram
            </a>
            <a href="#" className="flex items-center space-x-2">
              <FaFacebookF /> Facebook
            </a>
            <a href="#" className="flex items-center space-x-2">
              <FaLinkedinIn /> LinkedIn
            </a>
            <a href="#" className="flex items-center space-x-2">
              <FaTiktok /> TikTok
            </a>
          </div>
        </div>
      </div>

      {/* RODAPÉ INFERIOR */}
      <div className="border-t border-gray-200 mt-6 py-4 flex flex-col md:flex-row items-center justify-between max-w-screen-2xl mx-auto gap-2">
        <p>© Todos os direitos reservados ● Shopping Plaza Rio das Ostras</p>
        <button className="text-black hover:text-gray-300 transition-colors">Política de privacidade</button>
      </div>
    </footer>
  );
}
