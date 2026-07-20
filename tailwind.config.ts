import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary — dark forest green from the logo ring
        'rox-green':         '#2D4F1E',
        'rox-green-hover':   '#3A6428',
        'rox-green-light':   '#E4EDE0',
        // Gold — antique gold from the logo lettering
        'rox-gold':          '#B8902E',
        'rox-gold-bright':   '#D4A83A',
        'rox-gold-light':    '#F5EDD4',
        // Sport accent colors
        'rox-blue':          '#2B5075',
        'rox-blue-light':    '#DDE7F0',
        'rox-red':           '#8C2A1A',
        'rox-red-light':     '#F2E0DC',
        'rox-purple':        '#5E3578',
        'rox-purple-light':  '#EAE0F2',
        'rox-slate':         '#4A5560',
        'rox-slate-light':   '#E2E8ED',
        // Surfaces — parchment/cream to match logo's inner circle
        'rox-bg':            '#EDE8D8',
        'rox-card':          '#FAF7F0',
        'rox-border':        '#C8BC98',
        // Text — warm dark tones instead of cool gray-greens
        'rox-text1':         '#1A1408',
        'rox-text2':         '#3A3020',
        'rox-text3':         '#6A5E48',
      },
      borderRadius: {
        rox: '10px',
        'rox-sm': '7px',
      },
      boxShadow: {
        'rox-sm': '0 1px 3px rgba(20,15,0,0.08), 0 2px 8px rgba(20,15,0,0.06)',
        rox: '0 2px 8px rgba(20,15,0,0.12)',
      },
      maxWidth: {
        app: '520px',
      },
    },
  },
  plugins: [],
} satisfies Config
