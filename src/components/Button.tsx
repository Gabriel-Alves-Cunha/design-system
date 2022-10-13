import { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export function Button({ children, asChild, className, ...rest }: ButtonProps) {
	const Component = asChild ? Slot : "button";

	return (
		<Component
			className={clsx(
				"py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white",
				className
			)}
			{...rest}
		>
			{children}
		</Component>
	);
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	asChild?: boolean;
}
