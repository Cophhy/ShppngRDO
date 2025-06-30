// components/Advantages.jsx
'use client';

import { motion } from 'framer-motion';
import { FiCpu, FiBarChart2, FiShuffle, FiServer, FiShield, FiCode } from 'react-icons/fi';

const advantages = [
  {
    icon: <FiCpu className="text-4xl text-accent mb-4" />,
    title: 'Inteligência Artificial',
    desc: 'Identifique padrões ocultos, antecipando demandas e otimizando processos.',
  },
  {
    icon: <FiBarChart2 className="text-4xl text-accent mb-4" />,
    title: 'Business Intelligence',
    desc: 'Construa dashboards gerenciais e extraia insights valiosos de seus dados.',
  },
  {
    icon: <FiShuffle className="text-4xl text-accent mb-4" />,
    title: 'Automatize e Monitore',
    desc: 'Automatizações de relatórios e processos repetitivos em tempo real.',
  },
  {
    icon: <FiServer className="text-4xl text-accent mb-4" />,
    title: 'Data Warehouse & Lake',
    desc: 'Arquitetura escalável para integração e armazenamento de dados confiáveis.',
  },
  {
    icon: <FiShield className="text-4xl text-accent mb-4" />,
    title: 'Ambiente e Segurança',
    desc: 'Proteção de dados e integridade dos sistemas com práticas robustas.',
  },
  {
    icon: <FiCode className="text-4xl text-accent mb-4" />,
    title: 'Desenvolvimento de Apps',
    desc: 'Soluções personalizadas que otimizam processos e melhoram a UX.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 bg-primary text-white">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Vantagens de escolher nossos serviços</h2>
        <p className="max-w-2xl mx-auto text-white/80">
          Oferecemos uma gestão de dados eficaz, essencial para decisões informadas e eficiência operacional.
        </p>
      </div>

      <motion.div
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {advantages.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-secondary rounded-lg p-6 text-center"
            variants={itemVariants}
          >
            {item.icon}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-white/80">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
