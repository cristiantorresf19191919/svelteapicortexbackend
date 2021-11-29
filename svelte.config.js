import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'


const filePath = dirname(fileURLToPath(import.meta.url))
const sassPath = `${filePath}/src/lib/style/`
console.log("🚀 ~ file: svelte.config.js ~ line 9 ~ sassPath", sassPath)

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
		})
	],

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
