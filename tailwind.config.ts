import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Figtree", "serif"],
        mono: ["Passion One", "sans-serif"],
        display: ["Passion One", "sans-serif"],
        body: ["League Spartan", "serif"],
        heading: ["Bebas Neue", "sans-serif"],
        design: ["Yanone Kaffeesatz", "serif"],
        serif: ["Prata", "serif"],
        script: ["Doto","sans-serif"],
        cursive: ["Caesar Dressing", "cursive"],
        italic: ["Chokokutai", "cursive"],
        console: ["Ubuntu Mono", "monospace"],
        old1: ["Tiny5", "sans-serif"],
        black: ["Monoton", "cursive"],
        child: ["Mynerve", "sans-serif"],
        old: ["Pirata One", "cursive"],
      },
      colors: {
        brownpurple: "hsl(var(--brownpurple))",
        blueishpurple: "hsl(var(--blueishpurple))",
        lightpurple: "hsl(var(--lightpurple))",
        neonpurple: "hsl(var(--neonpurple))",
        whiteout: "hsl(var(--whiteout))",
        lemonchiffonlight: "var(--lemonchiffonlight)",
        lemonchiffon: "hsl(var(--lemonchiffon))",
        taupe: "hsl(var(--taupe))",
        bistre: "hsl(var(--bistre))",
        buff: "var(--buff)",
        brownsugar: "hsl(var(--brownsugar))",
        bittersweet: "hsl(var(--bittersweet))",
        bittersweetlight: "var(--bittersweetlight)",
        eerieblack: "hsl(var(--eerieblack))",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        dark: {
          brownpurple: "hsl(var(--brownpurple))",
          blueishpurple: "hsl(var(--blueishpurple))",
          lightpurple: "hsl(var(--lightpurple))",
          neonpurple: "hsl(var(--neonpurple))",
          whiteout: "hsl(var(--whiteout))",
          lemonchiffonlight: "var(--lemonchiffonlight)",
          lemonchiffon: "hsl(var(--lemonchiffon))",
          taupe: "hsl(var(--taupe))",
          bistre: "hsl(var(--bistre))",
          buff: "var(--buff)",
          brownsugar: "hsl(var(--brownsugar))",
          bittersweet: "hsl(var(--bittersweet))",
          bittersweetlight: "var(--bittersweetlight)",
          eerieblack: "hsl(var(--eerieblack))",
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
