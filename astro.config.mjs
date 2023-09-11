import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	integrations: [starlight({
		title: 'Eprouvette',
		logo: {
			src: './src/assets/logo_v2.svg',
		},
		social: {
			github: 'https://github.com/withastro/starlight'
		},
		defaultLocale: 'root',
		// optional
		locales: {
			root: {
				label: 'Français',
				lang: 'fr' // lang is required for root locales
			},

			en: {
				label: 'English',
				lang: 'en'
			}
		},
		sidebar: [{
			label: 'Physique',
			autogenerate: {
				directory: 'physique'
			}
		}, {
			label: 'Chimie',
			autogenerate: {
				directory: 'chimie'
			}
		}]
	}), react()]
});