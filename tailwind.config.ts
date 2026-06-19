import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#028f5d",
        "dull-green": "#294f42",
        "hover-green": "#3e6b5a",
        blue: "#0070c0",
        "dull-blue": "#156082",
        body: "#222222",
        muted: "#6b7280",
        "light-muted": "#eef5fc",
        navy: "#103d66",
        "gradient-blue": "#2f80ed",
        "gradient-green": "#27ae60",
        "welcome-start": "#a0b3a6",
        "welcome-end": "#3e5d4a",
        "soft-border": "#e0e0e0",
        "sidebar-scroll": "#1f3d34",
      },
      borderRadius: {
        pill: "100px",
        creed: "55px",
        mission: "20px",
      },
      height: { header: "70px" },
      width: { sidebar: "250px" },
      spacing: { header: "70px", sidebar: "250px" },
      maxWidth: { content: "1200px" },
      boxShadow: {
        card: "0 15px 35px rgba(0, 0, 0, 0.15)",
        modal: "0 20px 60px rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        modalFloat: {
          "0%": { opacity: "0", transform: "translateY(28px) scale(0.96)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        modalBackdrop: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        modalFloatOut: {
          "0%": { opacity: "1", transform: "translateY(0) scale(1)" },
          "100%": { opacity: "0", transform: "translateY(28px) scale(0.96)" },
        },
        modalBackdropOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "modal-float": "modalFloat 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "modal-backdrop": "modalBackdrop 0.3s ease-out forwards",
        "modal-float-out": "modalFloatOut 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "modal-backdrop-out": "modalBackdropOut 0.3s ease-in forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
