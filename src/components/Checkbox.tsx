import { Check } from "phosphor-react";
import * as CheckPrimitive from "@radix-ui/react-checkbox";

export function Checkbox(props: CheckboxProps) {
	return (
		<CheckPrimitive.Root
			className="w-6 h-6 p-[2px] bg-gray-800 rounded"
			{...props}
		>
			<CheckPrimitive.Indicator asChild>
				<Check weight="bold" className="h-5 w-5 text-cyan-500" />
			</CheckPrimitive.Indicator>
		</CheckPrimitive.Root>
	);
}

export interface CheckboxProps extends CheckPrimitive.CheckboxProps {}
