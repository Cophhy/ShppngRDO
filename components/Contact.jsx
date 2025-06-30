"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefone",
    description: "(+55) 555 555", //todo
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "vpaconsultoria@hotmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Endereço",
    description: "Rua César Castilho, 37 - Costazul - Rio das Ostras, RJ, Brasil",
  },
];

import { motion } from "framer-motion";

const Contato = () => {
  // State to store selected sectors
  const [selectedSectors, setSelectedSectors] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Sectors options
  const sectors = [
    { value: "financeiro", label: "Financeiro" },
    { value: "comercial", label: "Comercial/Vendas" },
    { value: "contabilidade", label: "Contabilidade/SCP" },
    { value: "tecnologia", label: "Tecnologia/TI" },
    { value: "marketing", label: "Marketing" },
    { value: "operacoes", label: "Operações/Segurança" },
    { value: "administrativo", label: "Administrativo" },
    { value: "outro", label: "Outro" },
  ];

  // Toggle selection of sectors
  const toggleSector = (value) => {
    setSelectedSectors((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Formulário */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Solicitar orçamento de projeto</h3>
              <p className="text-white/60">
                Preencha os detalhes do seu projeto e entraremos em contato o quanto antes.
              </p>

              {/* Empresa/Nome */}
              <Input type="text" placeholder="Empresa/Nome" />

              {/* Contato */}
              <Input type="text" placeholder="Contato (Nome do responsável)" />

              {/* Número de contato via WhatsApp */}
              <Input type="text" placeholder="Número para contato via WhatsApp" />

              {/* Custom Multi-Select */}
              <div className="relative">
                <div
                  className="w-full p-2 bg-black text-white/60 rounded cursor-pointer"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  {selectedSectors.length > 0
                    ? selectedSectors.join(", ")
                    : "Selecione os setores envolvidos no projeto"}
                </div>
                {showDropdown && (
                  <div className="absolute w-full mt-2 bg-black text-white/60 rounded shadow-lg z-10 p-2">
                    {sectors.map((sector) => (
                      <div key={sector.value} className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={selectedSectors.includes(sector.value)}
                          onChange={() => toggleSector(sector.value)}
                        />
                        <label>{sector.label}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Upload de arquivos */}
              <Input type="file" className="mt-4" placeholder="Anexe arquivos de referência (até 10 MB)" />

              {/* Data para reunião */}
              <Input type="date" placeholder="Melhor data para conversa" />

              {/* Hora para reunião */}
              <Input type="time" placeholder="Melhor horário para reunião" />

              {/* Botão de enviar */}
              <Button size="md" className="max-w-40">
                Enviar
              </Button>
            </form>
          </div>
          {/* Informações */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contato;
