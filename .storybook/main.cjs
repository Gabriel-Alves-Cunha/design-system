module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-links",
		"@storybook/addon-a11y",
	],
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-vite",
	},
	features: {
		interactionsDebugger: true,
		storyStoreV7: true,
	},
	staticDirs: [
		"../public"
	],
	viteFinal: (config, { configType }) => {
		if (configType === "PRODUCTION") config.base = "/design-system/"; // The name of this repo.

		return config;
	},
};
