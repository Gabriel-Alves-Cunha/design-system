import type { Meta, StoryObj } from "@storybook/react";

import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";

import {
	passwordPlaceholder,
	emailPlaceholder,
	loginSuccessfull,
	SignIn,
} from "./SignIn";

export default {
	title: "pages/SignIn",
	component: SignIn,
	parameters: {
		msw: {
			handlers: [
				rest.post("/sessions", (req, res, ctx) => {
					return res(ctx.json({ message: loginSuccessfull }));
				}),
			],
		},
	},
} as Meta;

export const Default: StoryObj = {
	async play({ canvasElement }) {
		const canvas = within(canvasElement);

		userEvent.type(
			canvas.getByPlaceholderText(emailPlaceholder),
			"my.email@example.com"
		);
		userEvent.type(
			canvas.getByPlaceholderText(passwordPlaceholder),
			"12345678"
		);

		userEvent.click(canvas.getByRole("button"));

		await waitFor(() =>
			expect(canvas.getByText(loginSuccessfull)).toBeInTheDocument()
		);
	},
};
