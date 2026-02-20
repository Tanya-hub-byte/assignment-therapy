import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dr. Maya Reynolds Design Palette
        maya: {
          primary: '#7A8B7C',   // Sage Green
          bg: '#F9F7F2',        // Warm Parchment
          text: '#2D3436',      // Charcoal
          accent: '#D4A373',    // Muted Sand
        },
      },
      // Custom radius for the "Arched Window" image effect in the template
      borderRadius: {
        't-arch': '50% 50% 0 0',
      },
    },
  },
  plugins: [],
};
export default config;