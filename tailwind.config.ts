import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'rox-green':         '#006633',
        'rox-green-hover':   '#007A3D',
        'rox-green-light':   '#E0EEE6',
        'rox-gold':          '#C8A000',
        'rox-gold-bright':   '#E5B700',
        'rox-gold-light':    '#FFF8D6',
        'rox-blue':          '#2B5F8A',
        'rox-blue-light':    '#E0EAF5',
        'rox-red':           '#8A3535',
        'rox-red-light':     '#F7E5E5',
        'rox-purple':        '#6B3D8A',
        'rox-purple-light':  '#EEE0F7',
        'rox-slate':         '#506070',
        'rox-slate-light':   '#E5ECF2',
        'rox-bg':            '#F0F5F0',
        'rox-card':          '#FFFFFF',
        'rox-border':        '#C8D8C8',
        'rox-text1':         '#1A1A1A',
        'rox-text2':         '#3A4A3A',
        'rox-text3':         '#6A806A',
      },
      borderRadius: {
        rox: '10px',
        'rox-sm': '7px',
      },
      boxShadow: {
        'rox-sm': '0 1px 3px rgba(0,40,10,0.07), 0 2px 8px rgba(0,40,10,0.05)',
        rox: '0 2px 8px rgba(0,40,10,0.10)',
      },
      maxWidth: {
        app: '520px',
      },
    },
  },
  plugins: [],
} satisfies Config
