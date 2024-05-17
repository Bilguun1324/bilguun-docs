import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Bilguun Docs',
    social: {
      github: 'https://github.com/Bilguun1324'
    },
    sidebar: [{
      label: 'Templates',
      autogenerate: {
        directory: 'templates'
      }
    }, {
      label: 'UI',
      autogenerate: {
        directory: 'ui'
      }
    }],
    customCss: ['./src/tailwind.css']
  }), tailwind({
    applyBaseStyles: false
  }), react()]
});