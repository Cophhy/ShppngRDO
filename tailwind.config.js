/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],                                           // Dark mode via classe :contentReference[oaicite:14]{index=14}
  content: [                                                    // Escanear todos os arquivos
    "./app/**/*.{js,jsx,ts,tsx}",                               // Next.js app router :contentReference[oaicite:15]{index=15}
    "./pages/**/*.{js,jsx,ts,tsx}",                             // Páginas
    "./components/**/*.{js,jsx,ts,tsx}",                        // Componentes
    "./src/**/*.{js,jsx,ts,tsx}",                               // Outras pastas
  ],
  theme: {
    container: {
      center: true,                                             // Centraliza containers :contentReference[oaicite:16]{index=16}
      padding: "1rem",                                          // Padding padrão
    },
    screens: {                                                 // Breakpoints customizados :contentReference[oaicite:17]{index=17}
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: ["Montserrat", "sans-serif"],                    // Fonte primária :contentReference[oaicite:18]{index=18}
    },
    extend: {
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#4a6f89",
          hover: "#09131c",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),                           // Plugin de animações :contentReference[oaicite:19]{index=19}
  ],
};
