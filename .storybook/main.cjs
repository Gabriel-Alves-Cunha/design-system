module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-interactions",
		"@storybook/addon-essentials",
		"@storybook/addon-links",
		"@storybook/addon-a11y",
	],
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-vite",
	},
	features: {
		storyStoreV7: true,
	},
	viteFinal: (config, { configType }) => {
		if (configType === "PRODUCTION") config.base = "/design-system/"; // The name of this repo.

		return config;
	},
};
