import { themes } from "@storybook/theming";

import "../src/styles/global.css";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	docs: { theme: themes.dark },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
