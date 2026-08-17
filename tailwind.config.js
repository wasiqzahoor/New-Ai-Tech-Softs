/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00D9FF',
          sky: '#B5EEF7',
          white: '#FFFFFF',
          beige: '#F1EDE4',
          gray: '#E4E6EA',
          mid: '#8B5CF6',
          dark: '#1a0533',
          yellow: '#FFC700',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-slower': 'float-slower 10s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'flip-in': 'flip-in 0.6s ease-out',
        'blur-in': 'blur-in 0.5s ease-out',
        'blob-1': 'blob1 20s ease-in-out infinite',
        'blob-2': 'blob2 25s ease-in-out infinite',
        'blob-3': 'blob3 22s ease-in-out infinite',
        'blob-4': 'blob4 18s ease-in-out infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 217, 255, 0.4)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'flip-in': {
          '0%': { transform: 'perspective(1000px) rotateX(-10deg)', opacity: '0' },
          '100%': { transform: 'perspective(1000px) rotateX(0)', opacity: '1' },
        },
        'blur-in': {
          '0%': { filter: 'blur(10px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' },
        },
        blob1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(100px, -80px) scale(1.1)' },
          '50%': { transform: 'translate(-50px, 60px) scale(0.9)' },
          '75%': { transform: 'translate(80px, 40px) scale(1.05)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(-120px, 60px) scale(0.95)' },
          '50%': { transform: 'translate(80px, -100px) scale(1.1)' },
          '75%': { transform: 'translate(-40px, -50px) scale(1)' },
        },
        blob3: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(60px, 100px) scale(1.05)' },
          '50%': { transform: 'translate(-100px, -40px) scale(0.95)' },
          '75%': { transform: 'translate(50px, -80px) scale(1.1)' },
        },
        blob4: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(-80px, -60px) scale(1.1)' },
          '50%': { transform: 'translate(60px, 80px) scale(0.9)' },
          '75%': { transform: 'translate(-30px, 50px) scale(1.05)' },
        },
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
}
