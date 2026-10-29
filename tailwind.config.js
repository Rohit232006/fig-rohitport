/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        figma: {
          bg: '#F7F8FA',
          canvas: '#FFFFFF',
          blue: '#0D99FF',
          'blue-hover': '#0085EB',
          'blue-light': '#E8F5FF',
          dark: '#1E1E1E',
          secondary: '#757575',
          muted: '#9E9E9E',
          border: '#E5E7EB',
          'border-dark': '#2E2E2E',
          purple: '#9747FF',
          pink: '#F24E1E',
          green: '#14AE5C',
          amber: '#FFAB00',
          panel: '#FFFFFF',
          'panel-dark': '#2C2C2C',
          'canvas-dark': '#1E1E1E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'figma-subtle': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)',
        'figma-card': '0 4px 16px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
        'figma-floating': '0 12px 32px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
        'figma-selected': '0 0 0 1.5px #0D99FF, 0 8px 24px -4px rgba(13, 153, 255, 0.18)',
        'figma-dark-floating': '0 16px 40px -8px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08)',
      }
    },
  },
  plugins: [],
}

