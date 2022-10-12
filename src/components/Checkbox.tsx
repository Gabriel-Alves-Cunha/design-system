import { Check } from "phosphor-react";
import * as CheckPrimitive from "@radix-ui/react-checkbox";

export function Checkbox({}: CheckboxProps) {
	return (
		<CheckPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded">
			<CheckPrimitive.Indicator asChild>
				<Check weight="bold" className="h-5 w-5 text-cyan-500" />
			</CheckPrimitive.Indicator>
		</CheckPrimitive.Root>
	);
}

export type CheckboxProps = {};
