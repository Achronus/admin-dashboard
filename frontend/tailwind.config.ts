import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        neutral: {
          DEFAULT: "hsl(var(--neutral))",
          dark: "hsl(var(--neutral-dark))",
          light: "hsl(var(--neutral-light))",
        },
        gray: {
          100: "hsl(var(--gray-100))",
          200: "hsl(var(--gray-200))",
          300: "hsl(var(--gray-300))",
          400: "hsl(var(--gray-400))",
          500: "hsl(var(--gray-500))",
          600: "hsl(var(--gray-600))",
          700: "hsl(var(--gray-700))",
          800: "hsl(var(--gray-800))",
          900: "hsl(var(--gray-900))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          100: "hsl(var(--primary-100))",
          200: "hsl(var(--primary-200))",
          300: "hsl(var(--primary-300))",
          400: "hsl(var(--primary-400))",
          500: "hsl(var(--primary-500))",
          600: "hsl(var(--primary-600))",
          700: "hsl(var(--primary-700))",
          800: "hsl(var(--primary-800))",
          900: "hsl(var(--primary-900))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          green: {
            100: "hsl(var(--greenAccent-100))",
            200: "hsl(var(--greenAccent-200))",
            300: "hsl(var(--greenAccent-300))",
            400: "hsl(var(--greenAccent-400))",
            500: "hsl(var(--greenAccent-500))",
            600: "hsl(var(--greenAccent-600))",
            700: "hsl(var(--greenAccent-700))",
            800: "hsl(var(--greenAccent-800))",
            900: "hsl(var(--greenAccent-900))",
          },
          red: {
            100: "hsl(var(--redAccent-100))",
            200: "hsl(var(--redAccent-200))",
            300: "hsl(var(--redAccent-300))",
            400: "hsl(var(--redAccent-400))",
            500: "hsl(var(--redAccent-500))",
            600: "hsl(var(--redAccent-600))",
            700: "hsl(var(--redAccent-700))",
            800: "hsl(var(--redAccent-800))",
            900: "hsl(var(--redAccent-900))",
          },
          blue: {
            100: "hsl(var(--blueAccent-100))",
            200: "hsl(var(--blueAccent-200))",
            300: "hsl(var(--blueAccent-300))",
            400: "hsl(var(--blueAccent-400))",
            500: "hsl(var(--blueAccent-500))",
            600: "hsl(var(--blueAccent-600))",
            700: "hsl(var(--blueAccent-700))",
            800: "hsl(var(--blueAccent-800))",
            900: "hsl(var(--blueAccent-900))",
          },
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
