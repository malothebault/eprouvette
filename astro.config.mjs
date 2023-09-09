import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Eprouvette',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			defaultLocale: 'root', // optional
			locales: {
				root: {
					label: 'Français',
					lang: 'fr', // lang is required for root locales
				},
				en: {
					label: 'English',
					lang: 'en',
				},
			},
			sidebar: [
				{
					label: 'Physique',
					autogenerate: { directory: 'physique' },
				},
				{
					label: 'Chimie',
					autogenerate: { directory: 'chimie' },
				},
			],
		}),
	],
});
