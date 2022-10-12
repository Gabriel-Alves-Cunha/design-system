import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export function Button({ children, asChild }: ButtonProps) {
	const Component = asChild ? Slot : "button";

	return (
		<Component
			className={clsx(
				"py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white",
				{}
			)}
		>
			{children}
		</Component>
	);
}

export type ButtonProps = {
	children: React.ReactNode;
	asChild?: boolean;
};
