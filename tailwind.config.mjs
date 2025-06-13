/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ===== SWISS DESIGN COLOR SYSTEM ===== */
      colors: {
        // Primary Swiss neutrals (International Typographic Style)
        white: '#FFFFFF',
        black: '#000000',
        
        // Swiss design accent colors
        swiss: {
          red: '#FF0000',      // Classic Swiss red - CTA/emphasis
          blue: '#0057A0',     // Primary blue - links/actions  
          yellow: '#FFD500',   // Secondary accent
          gray: '#D3D3D3',     // UI elements/dividers
        },
        
        // Functional grays (Swiss precision)
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5', 
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
        
        // Semantic colors
        background: '#FFFFFF',
        foreground: '#000000',
        primary: '#FF0000',
        secondary: '#0057A0',
        accent: '#FFD500',
        muted: '#D3D3D3',
      },

      /* ===== GOLDEN RATIO TYPOGRAPHY SCALE ===== */
      fontSize: {
        // Swiss precision meets golden ratio (φ = 1.618)
        'xs': ['12px', { lineHeight: '16px', letterSpacing: '0.025em' }],
        'sm': ['14px', { lineHeight: '20px', letterSpacing: '0.025em' }],
        'base': ['16px', { lineHeight: '24px', letterSpacing: '0' }],
        'lg': ['18px', { lineHeight: '28px', letterSpacing: '0' }],
        'xl': ['20px', { lineHeight: '32px', letterSpacing: '-0.025em' }],
        '2xl': ['24px', { lineHeight: '32px', letterSpacing: '-0.025em' }],
        '3xl': ['30px', { lineHeight: '36px', letterSpacing: '-0.025em' }],
        '4xl': ['36px', { lineHeight: '40px', letterSpacing: '-0.05em' }],
        '5xl': ['48px', { lineHeight: '48px', letterSpacing: '-0.05em' }],
        '6xl': ['60px', { lineHeight: '60px', letterSpacing: '-0.075em' }],
        '7xl': ['72px', { lineHeight: '72px', letterSpacing: '-0.075em' }],
        '8xl': ['96px', { lineHeight: '96px', letterSpacing: '-0.1em' }],
        '9xl': ['128px', { lineHeight: '128px', letterSpacing: '-0.1em' }],
        
        // Swiss display sizes
        'display-sm': ['30px', { lineHeight: '36px', letterSpacing: '-0.025em' }],
        'display-md': ['36px', { lineHeight: '44px', letterSpacing: '-0.025em' }],
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.025em' }],
        'display-xl': ['60px', { lineHeight: '72px', letterSpacing: '-0.025em' }],
        'display-2xl': ['72px', { lineHeight: '84px', letterSpacing: '-0.025em' }],
      },

      /* ===== MATHEMATICAL SPACING SYSTEM ===== */
      spacing: {
        // 8px base grid system (Swiss precision)
        '0.5': '2px',
        '1': '4px',
        '1.5': '6px',
        '2': '8px',    // Base unit
        '2.5': '10px',
        '3': '12px',
        '3.5': '14px',
        '4': '16px',   // 2 × base
        '5': '20px',
        '6': '24px',   // 3 × base
        '7': '28px',
        '8': '32px',   // 4 × base
        '9': '36px',
        '10': '40px',  // 5 × base
        '11': '44px',
        '12': '48px',  // 6 × base
        '14': '56px',  // 7 × base
        '16': '64px',  // 8 × base
        '20': '80px',  // 10 × base
        '24': '96px',  // 12 × base
        '28': '112px', // 14 × base
        '32': '128px', // 16 × base
        '36': '144px', // 18 × base
        '40': '160px', // 20 × base
        '44': '176px', // 22 × base
        '48': '192px', // 24 × base
        '52': '208px', // 26 × base
        '56': '224px', // 28 × base
        '60': '240px', // 30 × base
        '64': '256px', // 32 × base
        '72': '288px', // 36 × base
        '80': '320px', // 40 × base
        '96': '384px', // 48 × base
        
        // Golden ratio derived spacings
        'golden-sm': '13px',  // 8 × 1.618
        'golden-md': '20px',  // 12 × 1.618  
        'golden-lg': '32px',  // 20 × 1.618
        'golden-xl': '52px',  // 32 × 1.618
        'golden-2xl': '84px', // 52 × 1.618
      },

      /* ===== AUTHENTIC SWISS DESIGN FONT FAMILIES ===== */
      fontFamily: {
        // Primary: Authentic Swiss Design fonts
        sans: [
          'Helvetica Neue', 
          'Helvetica', 
          'Arial', 
          'sans-serif'
        ],
        
        // Display: Swiss International Style headers
        display: [
          'Neue Haas Grotesk',
          'Helvetica Neue', 
          'Helvetica', 
          'Arial', 
          'sans-serif'
        ],
        
        // Alternative: Modern Swiss-inspired
        swiss: [
          'Univers',
          'Akzidenz-Grotesk',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        
        // Mono: Swiss precision monospace
        mono: [
          'SF Mono',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Menlo',
          'Courier New',
          'monospace',
        ],
      },

      /* ===== MATHEMATICAL LAYOUT GRID ===== */
      maxWidth: {
        'xs': '320px',
        'sm': '384px',
        'md': '448px',
        'lg': '512px',
        'xl': '576px',
        '2xl': '672px',
        '3xl': '768px',
        '4xl': '896px',
        '5xl': '1024px',
        '6xl': '1152px',
        '7xl': '1280px',
        
        // Swiss design content widths
        'prose': '65ch',
        'content': '1024px',   // Golden ratio of 1680px
        'wide': '1280px',
        'container': '1440px',
      },

      /* ===== SWISS DESIGN BORDER RADIUS ===== */
      borderRadius: {
        'none': '0px',
        'sm': '2px',     // Minimal, clean
        'DEFAULT': '4px', // Standard
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        'full': '9999px',
        
        // Swiss specific
        'swiss': '2px',    // Clean, minimal corners
      },

      /* ===== PRECISION SHADOWS ===== */
      boxShadow: {
        // Swiss design: minimal, functional shadows
        'swiss-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'swiss-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'swiss-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'swiss-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        
        // Functional shadows
        'grid': 'inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
        'focus': '0 0 0 3px rgba(255, 0, 0, 0.1)',
      },

      /* ===== SWISS TYPOGRAPHY WEIGHTS ===== */
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',     // Body text
        'medium': '500',
        'semibold': '600',   // Subheadings
        'bold': '700',       // Headings
        'extrabold': '800',  // Display
        'black': '900',      // Hero text
      },

      /* ===== GOLDEN RATIO LINE HEIGHTS ===== */
      lineHeight: {
        'none': '1',
        'tight': '1.25',     // Headlines
        'snug': '1.375',     // Subheadings  
        'normal': '1.5',     // Body text
        'relaxed': '1.618',  // Golden ratio
        'loose': '2',        // Large text
        
        // Swiss precision
        'swiss-tight': '1.2',
        'swiss-normal': '1.4', 
        'swiss-relaxed': '1.6',
      },

      /* ===== MATHEMATICAL LETTER SPACING ===== */
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
        
        // Swiss design specific
        'swiss-tight': '-0.025em',  // Headers
        'swiss-normal': '0em',      // Body
        'swiss-wide': '0.05em',     // All caps
      },

      /* ===== SWISS DESIGN ANIMATIONS ===== */
      transitionDuration: {
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',    // Fast interactions
        '200': '200ms',
        '300': '300ms',    // Standard
        '500': '500ms',    // Slow, deliberate
        '700': '700ms',
        '1000': '1000ms',
      },

      transitionTimingFunction: {
        'linear': 'linear',
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'swiss': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Swiss precision
      },

      /* ===== GRID SYSTEM ===== */
      gridTemplateColumns: {
        // Swiss design 12-column grid
        'swiss': 'repeat(12, 1fr)',
        'swiss-16': 'repeat(16, 1fr)',
        
        // Content layouts
        'header': '1fr 2fr',     // Logo + Nav (rule of thirds)
        'main': '1fr 3fr 1fr',   // Sidebar + Content + Sidebar
        'asymmetric': '2fr 3fr', // Swiss asymmetry
      },

      /* ===== Z-INDEX SYSTEM ===== */
      zIndex: {
        'auto': 'auto',
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        
        // Functional layers
        'background': '-1',
        'base': '0',
        'content': '1',
        'overlay': '10',
        'modal': '20',
        'popover': '30',
        'tooltip': '40',
        'navbar': '100',
      },
    },
  },
  
  plugins: [
    // Custom Swiss Design utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        // Swiss grid overlay for development
        '.debug-grid': {
          backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: `${theme('spacing.8')} ${theme('spacing.8')}`,
        },
        
        // Swiss typography utilities
        '.swiss-heading': {
          fontWeight: theme('fontWeight.bold'),
          letterSpacing: theme('letterSpacing.swiss-tight'),
          lineHeight: theme('lineHeight.swiss-tight'),
        },
        
        '.swiss-body': {
          fontWeight: theme('fontWeight.normal'),
          letterSpacing: theme('letterSpacing.swiss-normal'),
          lineHeight: theme('lineHeight.swiss-normal'),
        },
        
        '.swiss-caps': {
          textTransform: 'uppercase',
          letterSpacing: theme('letterSpacing.swiss-wide'),
          fontWeight: theme('fontWeight.semibold'),
        },
        
        // Swiss layout utilities
        '.swiss-container': {
          maxWidth: theme('maxWidth.content'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.8'),
          paddingRight: theme('spacing.8'),
        },
        
        '.swiss-grid': {
          display: 'grid',
          gridTemplateColumns: theme('gridTemplateColumns.swiss'),
          gap: theme('spacing.6'),
        },
        
        // Swiss focus states
        '.swiss-focus': {
          '&:focus': {
            outline: 'none',
            boxShadow: theme('boxShadow.focus'),
          },
        },
      }
      
      addUtilities(newUtilities)
    },
  ],
};