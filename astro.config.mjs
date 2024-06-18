import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown'

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
	site: 'https://chrisgoac.dev/',
	integrations: [
		robotsTxt(),
		tailwind(),
			partytown({
				config: {
				forward: ["dataLayer.push"],
				},
			}),
	],
});
