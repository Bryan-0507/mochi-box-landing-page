import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import icon from "astro-icon";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: "https://Bamo0507.github.io",     
  base: "/mochi-box-landing-page",        
  output: "static",                        
  integrations: [
    react(),
    tailwind(),
    icon({
      include: { lucide: ["*"] },
    }),
  ],
});