import { Slot } from "@radix-ui/react-slot"; // With this, you can use any custom component in place of the default one.
import { clsx } from "clsx";

export function Text({ size = "md", children, asChild }: TextProps) {
	const Component = asChild ? Slot : "span"; // The first children will receive all the props of the Component.

	return (
		<Component
			className={clsx("text-gray-100 font-sans", {
				"text-xs": size === "sm",
				"text-sm": size === "md",
				"text-md": size === "lg",
			})}
		>
			{children}
		</Component>
	);
}

export type TextProps = {
	size?: "sm" | "md" | "lg";
	children: React.ReactNode;
	asChild?: boolean;
};
