import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    proxy: {
      "/socket.io": {
        target: "http://localhost:3001",
        ws: true,
      },
    },
  },
};
