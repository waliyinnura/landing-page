/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Mengaktifkan mode gelap berbasis kelas
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {}, // Tambahkan kustomisasi tema di sini
  },
  plugins: [], // Tambahkan plugin Tailwind CSS jika diperlukan
};
