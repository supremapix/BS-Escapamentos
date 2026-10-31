export default {content: ["./index.html", "./{components,pages}/**/*.tsx", "./App.tsx"], ...{
        theme: {
          extend: {
            colors: {
              primary: {
                dark: '#0f172a',    // Slate 900
                blue: '#1e3a8a',    // Brand Blue (Deep)
                yellow: '#facc15',  // Brand Yellow (Bright)
                red: '#ef4444',     // Alerts
                green: '#25d366',   // WhatsApp
              },
              gray: {
                light: '#f8f9fa',
                medium: '#6c757d',
                dark: '#343a40',
              }
            },
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
              heading: ['Poppins', 'sans-serif'],
            },
            animation: {
              'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
              'blink': 'blink 1s step-end infinite',
              'spin-slow': 'spin 8s linear infinite',
              'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
              'zoom-in': 'zoomIn 20s ease-out forwards',
              'float': 'float 3s ease-in-out infinite',
              'scroll-up': 'scrollUp 60s linear infinite',
              'scroll-left': 'scrollLeft 40s linear infinite',
              'scroll-vertical': 'scrollVertical 45s linear infinite',
              'scroll-vertical-slow': 'scrollVertical 60s linear infinite',
              'scroll-vertical-fast': 'scrollVertical 35s linear infinite',
              'twinkle': 'twinkle 2s ease-in-out infinite',
            },
            keyframes: {
              heartbeat: {
                '0%, 100%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(1.3)' },
              },
              blink: {
                '0%, 100%': { opacity: '1' },
                '50%': { opacity: '0' },
              },
              fadeInUp: {
                '0%': { opacity: '0', transform: 'translateY(20px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
              },
              zoomIn: {
                '0%': { transform: 'scale(1)' },
                '100%': { transform: 'scale(1.2)' },
              },
              float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
              },
              scrollUp: {
                '0%': { transform: 'translateY(0)' },
                '100%': { transform: 'translateY(-50%)' },
              },
              scrollLeft: {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' },
              },
              scrollVertical: {
                '0%': { transform: 'translateY(0)' },
                '100%': { transform: 'translateY(-50%)' },
              },
              twinkle: {
                '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                '50%': { opacity: '0.6', transform: 'scale(0.8)' },
              }
            }
          },
        },
      }};