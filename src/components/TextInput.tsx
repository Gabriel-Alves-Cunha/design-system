import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

function TextInputRoot({ children }: TextInputRootProps) {
	return (
		<div className="flex items-center h-12 gap-3 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300">
			{children}
		</div>
	);
}
TextInputRoot.displayName = "TextInput.Root";

function TextInputIcon({ children }: TextInputIconProps) {
	return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}
TextInputIcon.displayName = "TextInput.Icon";

function TextInputInput(props: TextInputInputProps) {
	return (
		<input
			className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
			{...props}
		/>
	);
}
TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
	Input: TextInputInput,
	Root: TextInputRoot,
	Icon: TextInputIcon,
};

export interface TextInputInputProps
	extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
	children: ReactNode;
}

export interface TextInputIconProps {
	children: ReactNode;
}
