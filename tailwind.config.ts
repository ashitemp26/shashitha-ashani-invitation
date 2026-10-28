import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { paper: '#f8f4ec', gold: '#b3945e', ink: '#29352f' }, fontFamily: { serif: ['var(--font-cormorant)'], sans: ['var(--font-manrope)'], script: ['var(--font-script)'] } } }, plugins: [] };
export default config;
