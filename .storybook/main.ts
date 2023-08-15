import type { StorybookConfig } from "@storybook/sveltekit";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-svelte-csf",
	],
	framework: {
		name: "@storybook/sveltekit",
		options: {},
	},
	docs: {
		// autodocs: true,
	},
};
export default config;
