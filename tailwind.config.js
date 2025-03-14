export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        container: {
          center: true,
          padding: "2rem", // Adds spacing for large screens
        },
        screens: {
          "2xl": "1440px", // Supports ultra-wide screens
        },
      },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
      ],
};
  