import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "./", // Make sure assets are correctly referenced
	build: {
		outDir: "dist", // Customize your output directory if needed
	},
	optimizeDeps: {
		exclude: ["lucide-react"],
	},
});
